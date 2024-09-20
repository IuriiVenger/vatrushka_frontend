import { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

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
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
};

export default config;
