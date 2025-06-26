import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($tag: String!, $orderBy: String) {
    posts(tag: $tag, orderBy: $orderBy) {
      id
      postKey
      title
      tags
    }
  }
`;

export const GET_POST_WITH_KEY = gql`
  query GetPostWithKey($postKey: String!) {
    post(postKey: $postKey) {
      id
      postKey
      title
      tags
    }
  }
`;

export const GET_TAGS = gql`
  query GetAllTags {
    allTags
  }
`;
