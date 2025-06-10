import { ApolloClient, HttpLink } from "@apollo/client";

import {
  registerApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

const VALIDATED_API_KEY = process.env.NEXT_PUBLIC_VALIDATED_API_KEY || "";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URI,
    headers: {
      "x-api-key": VALIDATED_API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_SERVER_URI,
      headers: {
        "x-api-key": VALIDATED_API_KEY,
      },
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
});
