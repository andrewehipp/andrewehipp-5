import { gql } from '@apollo/client';

export const GET_PROJECT_PAGE_META = gql`
    query ProjectPageMeta($slug: String) {
        projectCollection(where: { slug_in: [$slug] }, limit: 1) {
            items {
                name
                description
            }
        }
    }
`;
