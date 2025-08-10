import { gql } from '@apollo/client';

export const GET_PROJECT_PAGE = gql`
    query ProjectPage($slug: String) {
        projectCollection(where: { slug_in: [$slug] }, limit: 1) {
            items {
                _id
                name
                client
                description
                screenshotsCollection {
                    items {
                        _id
                        name
                        description
                        mobile {
                            url(
                                transform: {
                                    width: 210
                                    height: 375
                                    resizeStrategy: FILL
                                    resizeFocus: TOP
                                    format: WEBP
                                }
                            )
                            width
                            height
                            contentType
                        }
                        desktop {
                            url(transform: { width: 1000, format: WEBP })
                            width
                            height
                            contentType
                        }
                    }
                }
            }
        }

        projectListingCollection(where: { name_in: ["Home"] }, limit: 1) {
            items {
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
