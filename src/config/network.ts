import dotenv from 'dotenv';

dotenv.config();

export const graphQLApiUrl = process.env.GRAPHQL_API_URL || '';
export const restApiUrl = process.env.REST_API_URL || '';
export const graphqlEndpoint = `${graphQLApiUrl}/graphql/v1`;
export const apikey = process.env.API_KEY || '';
