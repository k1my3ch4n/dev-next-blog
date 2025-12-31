"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

const VALIDATED_API_KEY = process.env.NEXT_PUBLIC_VALIDATED_API_KEY || "";

export const makeClient = () => {
  const httpLink = new HttpLink({
    // 클라이언트 사이드에서는 상대 URL 사용
    uri: "/api/graphql",
    headers: {
      "x-api-key": VALIDATED_API_KEY,
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloWrapper;
