import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const VALIDATED_API_KEY = process.env.NEXT_VALIDATED_API_KEY ?? '';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_SERVER_URI,
    headers: {
      'x-api-key': VALIDATED_API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
