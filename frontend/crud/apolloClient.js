import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://crud-api.vercel.app/graphql', 
  cache: new InMemoryCache(),
});

export default client;
