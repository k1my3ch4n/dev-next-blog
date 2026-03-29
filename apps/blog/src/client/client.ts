import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  registerApolloClient,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client-integration-nextjs";

import { typeDefs, resolvers } from "@/lib/graphql/schema";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
    devtools: { enabled: false },
  });
});
