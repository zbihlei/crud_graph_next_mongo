import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
     name,
     description
    }
  }
  `;

export const DELETE_TASK = gql`
mutation DeleteTask($id: ID!) {
  deleteTask(id : $id) {
   _id
  }
}
`;

export const UPDATE_TASK_STATUS = gql`
  mutation UpdateTaskStatus($id: ID!, $newStatus: String!) {
    updateTaskStatus(id: $id, newStatus: $newStatus) {
      _id
      status
    }
  }
`;
