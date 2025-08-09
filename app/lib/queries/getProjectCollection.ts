import { gql } from "@apollo/client";

export const GET_PROJECT_COLLECTION = gql`
    query ProjectCollection {
        projectCollection(limit: 500) {
            items {
                name
                description
                slug
            }
        }
    }
`;
