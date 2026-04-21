import pg from "pg";
import { unstable_cache, cacheTag } from "next/cache";

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
  max: 10,
});

export async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        "postKey" TEXT,
        "externalUrl" TEXT,
        "thumbnailKey" TEXT,
        title TEXT NOT NULL,
        tags TEXT[] DEFAULT '{}'
      )
    `);
    console.log("Database initialized");
  } finally {
    client.release();
  }
}

export interface PostRow {
  id: number;
  postKey: string | null;
  externalUrl: string | null;
  thumbnailKey: string | null;
  title: string;
  tags: string[];
}

export const getPosts = unstable_cache(
  async (tag: string, orderBy: string = "DESC"): Promise<PostRow[]> => {
    const order = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    let query = "SELECT * FROM posts";
    const params: string[] = [];

    if (tag) {
      query += " WHERE $1 = ANY(tags)";
      params.push(tag);
    }

    const { rows } = await pool.query(`${query} ORDER BY id ${order}`, params);
    return rows;
  },
  ["get-posts"],
  { tags: ["posts"] },
);

export const getPost = unstable_cache(
  async (postKey: string): Promise<PostRow | null> => {
    cacheTag(`post-${postKey}`);
    const { rows } = await pool.query(
      'SELECT * FROM posts WHERE "postKey" = $1',
      [postKey],
    );
    return rows[0] ?? null;
  },
  ["get-post"],
  { tags: ["posts"] },
);

export const getAllTags = unstable_cache(
  async (): Promise<string[]> => {
    const { rows } = await pool.query(
      "SELECT DISTINCT UNNEST(tags) AS tag FROM posts ORDER BY tag;",
    );
    return rows.map((row: { tag: string }) => row.tag);
  },
  ["get-all-tags"],
  { tags: ["posts"] },
);

export default pool;
