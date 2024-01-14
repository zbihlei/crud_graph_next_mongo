import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://crud-api-liart.vercel.app/graphql', 
  cache: new InMemoryCache(),
});

export default client;


