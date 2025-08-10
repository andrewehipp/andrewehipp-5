import { ApolloClient, InMemoryCache } from '@apollo/client';

export const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`;

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});

export default client;
