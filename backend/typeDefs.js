import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Task {
    _id: ID
    name: String
    description: String
  }

  type Query {
    getTasks: [Task]
  }
`;

export default typeDefs;
