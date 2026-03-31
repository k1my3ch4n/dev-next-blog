"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "/api/graphql",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    devtools: { enabled: false },
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
