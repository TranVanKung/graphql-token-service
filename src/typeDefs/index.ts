import { gql } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';
import commonTypeDef from './common';
import tokenTypeDef from './token';

const initialTypeDef = gql`
  type Query {
    token_default_query: String
  }

  type Mutation {
    token_default_mutation: String
  }
`;

const rootTypeDef = [initialTypeDef, commonTypeDef, tokenTypeDef];

export default mergeTypeDefs(rootTypeDef);
