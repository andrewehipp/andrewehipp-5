import client from "./lib/utilities/apollo";
import Link from "next/link";
import { gql } from "@apollo/client";

import Layout from "./ui/components/Layout";
import About from "./ui/components/About";
import ProjectGrid from "./ui/components/ProjectGrid";
import Card from "./ui/components/Card";

import { HomePageQuery, HomePageQueryVariables } from '@/__generated__/graphql';

import { LayoutGridItemVariants } from "./ui/components/ProjectGrid/styles";

const layout: LayoutGridItemVariants = {
    0: { width: "wide" },
    1: { align: "alignBottom" },
    6: { width: "wide" },
    7: { width: "wide" },
    13: { width: "wide" },
};

export default async function Home() {
    const { data } = await client.query<HomePageQuery, HomePageQueryVariables>({
        query: gql(`
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
        `),
    });

    const {
        about,
        projectsCollection,
    } = data?.projectListingCollection?.items?.[0] || {}

    const projects = projectsCollection?.items
    if (!projects) { return; }
    return (
        <Layout
            contentProps={{
                bleedBottom: "bleed",
                bleedTop: "bleed",
            }}
            sidebarChildren={<About body={about || ''} />}
            contentChildren={
                <ProjectGrid
                    items={projects}
                    renderItem={(project, projectIndex) => (
                        <Link
                            key={project?.slug}
                            href={`/projects/${project?.slug}`}
                        >
                            <Card project={project} delay={80 * projectIndex} />
                        </Link>
                    )}
                    layout={layout}
                />
            }
        />
    );
}
