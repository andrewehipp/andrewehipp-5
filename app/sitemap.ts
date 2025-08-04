import type { MetadataRoute } from "next";
import client from "./lib/utilities/apollo";
import { gql } from "@apollo/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { data } = await client.query({
        query: gql`
            query {
                projectCollection(limit: 500) {
                    items {
                        slug
                    }
                }
            }
        `,
    });

    return [
        {
            url: "https://andrewehipp.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...data.projectCollection.items.map(({ slug }: { slug: string }) => ({
            url: `https://andrewehipp.com/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        })),
    ];
}
