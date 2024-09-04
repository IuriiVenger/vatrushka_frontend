import dotenv from 'dotenv';

dotenv.config();

export const graphqlEndpoint = `${process.env.API_URL}/graphql/v1`;

export const apikey = process.env.API_KEY || '';
