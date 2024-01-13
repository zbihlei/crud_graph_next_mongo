import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';
import mongoose from 'mongoose';

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send('hello from express apollo server');
  });

  try {
    await mongoose.connect('mongodb+srv://liiamnissen:1111@cluster0.rud9g1z.mongodb.net/crud');
    console.log('mongoose connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  

  app.listen(4000, () => console.log('server is running on port 4000'));
}

startServer();
