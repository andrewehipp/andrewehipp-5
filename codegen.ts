import dotenv from 'dotenv';
import { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config({ path: '.env' });

const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`;

const config: CodegenConfig = {
    schema: uri,
    documents: ['app/**/*.ts'],
    generates: {
        "./__generated__/": {
            preset: 'client',
        },
    },
};

export default config;
