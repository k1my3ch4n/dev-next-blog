import { HttpLink } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  registerApolloClient,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client-integration-nextjs";

import { typeDefs, resolvers } from "@/lib/graphql/schema";

const VALIDATED_API_KEY = process.env.VALIDATED_API_KEY || "";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const getLink = () => {
  if (typeof window === "undefined") {
    return new SchemaLink({ schema });
  }

  return new HttpLink({
    uri: "/api/graphql",
    headers: {
      "x-api-key": VALIDATED_API_KEY,
    },
  });
};

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: getLink(),
  });
});
