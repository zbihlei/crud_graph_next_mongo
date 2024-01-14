import { config } from 'dotenv';
config();
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
  const dbConnection = process.env.dbConnection;
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use(express.json());

  app.use((req, res) => {
    res.send('hello from express apollo server');
  });

  try {
    await mongoose.connect(dbConnection);
    console.log('mongoose connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  

  app.listen(4000, () => console.log('server is running on port 4000'));
}

startServer();
