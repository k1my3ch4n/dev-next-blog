import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

const VALIDATED_API_KEY = process.env.VITE_VALIDATED_API_KEY || "";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.VITE_SERVER_URI,
      headers: {
        "x-api-key": VALIDATED_API_KEY,
      },
    }),
    cache: new InMemoryCache(),
  });
});
