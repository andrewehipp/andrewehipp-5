import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
    query HomePage {
        projectListingCollection(limit: 1) {
            items {
                about
                projectsCollection {
                    items {
                        slug
                        client
                        name
                        fullThumbnail {
                            url(transform: { width: 530, format: WEBP })
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;
