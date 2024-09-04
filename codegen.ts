import { CodegenConfig } from '@graphql-codegen/cli';

import { apikey, graphqlEndpoint } from './src/config/network';

const config: CodegenConfig = {
  schema: [
    {
      [graphqlEndpoint]: {
        headers: {
          apikey,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
    },
  },
};

export default config;
