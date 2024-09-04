import { CodegenConfig } from '@graphql-codegen/cli';

import dotenv from 'dotenv';

import path from 'path';

import { apikey, graphqlEndpoint } from './src/config/network';

dotenv.config({
  path: path.resolve('./', './.env.production', './.env'),
});

const config: CodegenConfig = {
  schema: [
    {
      'https://inkkuxgmxzhoxsuidrho.supabase.co/graphql/v1': {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlua2t1eGdteHpob3hzdWlkcmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MDcwNzEsImV4cCI6MjAzODA4MzA3MX0.ev5gZU6GXFctnHZyXhekbEkQby9WPcKXh49qBpfysXc',
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
