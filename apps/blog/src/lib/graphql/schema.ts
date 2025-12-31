import { gql } from "graphql-tag";
import pool from "../db";

export const typeDefs = gql`
  type Post {
    id: Int!
    postKey: String!
    title: String!
    tags: [String]!
  }

  type Query {
    posts(orderBy: String, tag: String!): [Post!]!
    post(postKey: String!): Post!
    allTags: [String!]!
    postsByTag(tag: String!, orderBy: String): [Post!]!
  }

  type Mutation {
    addPost(title: String!, postKey: String!, tags: [String]!): Post!
    deletePost(postKey: String!): Boolean
  }
`;

interface Post {
  id: number;
  postKey: string;
  title: string;
  tags: string[];
}

export const resolvers = {
  Query: {
    posts: async (
      _: unknown,
      { tag, orderBy = "DESC" }: { tag: string; orderBy?: string }
    ): Promise<Post[]> => {
      const order = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

      let query = "SELECT * FROM posts";
      const queryParams: string[] = [];

      if (tag) {
        query += " WHERE $1 = ANY(tags)";
        queryParams.push(tag);
      }

      const { rows } = await pool.query(
        `${query} ORDER BY id ${order}`,
        queryParams
      );

      return rows;
    },
    post: async (
      _: unknown,
      { postKey }: { postKey: string }
    ): Promise<Post | undefined> => {
      const { rows } = await pool.query(
        'SELECT * FROM posts WHERE "postKey" = $1',
        [postKey]
      );

      return rows[0];
    },
    allTags: async (): Promise<string[]> => {
      const { rows } = await pool.query(
        "SELECT DISTINCT UNNEST(tags) AS tag FROM posts ORDER BY tag;"
      );
      return rows.map((row: { tag: string }) => row.tag);
    },
  },
  Mutation: {
    addPost: async (
      _: unknown,
      {
        postKey,
        title,
        tags,
      }: { postKey: string; title: string; tags: string[] }
    ): Promise<Post> => {
      const result = await pool.query(
        'INSERT INTO posts ("postKey", title, tags) VALUES ($1, $2, $3) RETURNING *',
        [postKey, title, tags || []]
      );

      return result.rows[0];
    },
    deletePost: async (
      _: unknown,
      { postKey }: { postKey: string }
    ): Promise<boolean> => {
      const result = await pool.query(
        'DELETE FROM posts WHERE "postKey" = $1',
        [postKey]
      );

      return (result.rowCount ?? 0) > 0;
    },
  },
};
