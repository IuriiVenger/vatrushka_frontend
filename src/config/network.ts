import dotenv from 'dotenv';

dotenv.config();

export const apiURL = process.env.API_URL;
export const graphqlEndpoint = `${apiURL}/graphql/v1`;
export const apikey = process.env.API_KEY || '';
