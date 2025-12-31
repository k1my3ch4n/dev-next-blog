import { HttpLink } from "@apollo/client";

import {
  registerApolloClient,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client-integration-nextjs";

const VALIDATED_API_KEY = process.env.VALIDATED_API_KEY || "";

// 서버 사이드에서는 절대 URL 필요
const getGraphQLUri = () => {
  if (typeof window === "undefined") {
    // 서버 사이드: 환경변수 또는 기본값 사용
    return process.env.GRAPHQL_URL || "http://localhost:3000/api/graphql";
  }
  // 클라이언트 사이드: 상대 URL 사용
  return "/api/graphql";
};

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: getGraphQLUri(),
      headers: {
        "x-api-key": VALIDATED_API_KEY,
      },
    }),
  });
});
