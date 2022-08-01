import { gql } from 'apollo-server-express';

const tokenTypeDef = gql`
  type Token @key(fields: "_id") {
    _id: ID
    address: String
    chainId: Int
    name: String
    decimal: Int
    symbol: String
  }

  input TokenInput {
    address: String!
    chainId: Int!
    name: String
    decimal: Int!
    symbol: String!
  }

  type TokenResponse {
    data: Token
    code: Int
    message: String
  }

  type PaginationToken {
    data: [Token]
    totalData: Int
    totalPage: Int
    page: Int
    perPage: Int
    code: Int
    message: String
  }

  extend type Query {
    getAllToken: PaginationToken
  }

  extend type Mutation {
    createOneToken(data: TokenInput!): TokenResponse
  }
`;

export default tokenTypeDef;
