"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/client/client";

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
