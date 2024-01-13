import { gql } from '@apollo/client';


export const GET_TASKS = gql`
query {
  getTasks {
    _id
    name
    description
    status
  }
}
`;
