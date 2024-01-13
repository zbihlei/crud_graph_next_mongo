import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Task {
    _id: ID
    name: String
    description: String
    status: String
  }

  type Query {
    getTasks: [Task]
  }

  type Mutation {
    createTask(input: TaskInput!): Task,
    deleteTask(id: ID): Task,
    updateTaskStatus(id: ID, newStatus: String!): Task
  }

  input TaskInput {
    name: String!
    description: String!
  }
`;

export default typeDefs;
