'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@src/clients/client';

const ApolloProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderLayout;
