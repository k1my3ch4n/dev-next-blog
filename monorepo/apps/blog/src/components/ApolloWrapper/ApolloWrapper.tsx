"use client";

import { ApolloProvider } from "@apollo/client";
import { getClient } from "@/client/client";

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={getClient()}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
