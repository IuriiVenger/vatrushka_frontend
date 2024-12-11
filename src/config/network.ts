import dotenv from 'dotenv';

dotenv.config();

export const graphQLApiUrl = process.env.GRAPHQL_API_URL || '';
export const restApiUrl = process.env.REST_API_URL || '';
export const graphqlEndpoint = `${graphQLApiUrl}/graphql/v1`;
export const apikey = process.env.API_KEY || '';
export const mailjetApiKey = process.env.MAILJET_API_PUBLIC_KEY || '';
export const mailjetApiSecret = process.env.MAILJET_API_PRIVATE_KEY || '';
export const rateLimiter = {
  minuteCount: process.env.RATE_LIMITER_MINUTE_COUNT || 3,
  hourCount: process.env.RATE_LIMITER_HOUR_COUNT || 10,
};
export const dadataLocationBoost = process.env.DADATA_LOCATION_BOOST;
