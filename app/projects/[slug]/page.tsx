import { Metadata } from "next";
import { gql } from "@apollo/client";

import Layer from "@/app/ui/components/Layer";
import Markdown from "@/app/ui/components/Markdown";
import Layout from "@/app/ui/components/Layout";
import ProjectHeader from "@/app/ui/components/ProjectHeader";
import TextAppear from "@/app/ui/components/TextAppear";
import ScreenShot from "@/app/ui/components/Screenshot";

import client from "../../lib/utilities/apollo";
import ProjectGrid from "@/app/ui/components/ProjectGrid";
import Link from "next/link";
import Card from "@/app/ui/components/Card";
import { ProjectPageQuery, ProjectPageQueryVariables } from "@/__generated__/graphql";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await client.query({
        query: gql`
            query ProjectCollection {
                projectCollection(limit: 500) {
                    items {
                        name
                        description
                        slug
                    }
                }
            }
        `,
    });

    return data.projectCollection.items.map(
        ({ name, description }: { name: string; description: string }) => ({
            title: name,
            description,
        }),
    );
}

export async function generateStaticParams() {
    const { data } = await client.query({
        query: gql`
            query ProjectCollection {
                projectCollection(limit: 500) {
                    items {
                        name
                        description
                        slug
                    }
                }
            }
        `,
    });

    return data.projectCollection.items.map(({ slug }: { slug: string }) => ({
        slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const { data } = await client.query<ProjectPageQuery, ProjectPageQueryVariables>({
        query: gql`
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
                                    url(
                                        transform: { width: 1000, format: WEBP }
                                    )
                                    width
                                    height
                                    contentType
                                }
                            }
                        }
                    }
                }

                projectListingCollection(
                    where: { name_in: ["Home"] }
                    limit: 1
                ) {
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
        `,
        variables: {
            slug,
        },
    });

    const {
        name: projectName,
        client: projectClient,
        screenshotsCollection,
        description: projectDescription,
    } = data?.projectCollection?.items?.[0] || {};

    const screenshots = screenshotsCollection?.items || [];

    const {
        projectsCollection: relatedProjectsCollection
    } = data?.projectListingCollection?.items?.[0] || {};

    const relatedProjectsCollectionItems = relatedProjectsCollection?.items || []

    const projectIndex = relatedProjectsCollectionItems.findIndex((p) => p?.slug === slug);
    const relatedProjects = projectIndex !== -1 ? relatedProjectsCollectionItems.slice(projectIndex + 1, projectIndex + 4) : undefined;

    return (
        <>
            <Layer>
                {screenshots.map(
                    (
                        screenshot,
                        screenshotIndex,
                    ) => {
                        if (!screenshot) { return null; }
                        return (
                        <Layout
                            key={screenshot?._id}
                            contentProps={{
                                bleedTop:
                                    screenshotIndex === 0 ? 'bleed' : undefined,
                            }}
                            sidebarChildren={
                                <>
                                    {screenshotIndex === 0 && (
                                        <>
                                            <ProjectHeader
                                                name={projectName || ''}
                                                client={projectClient || ''}
                                            />
                                            <TextAppear transition="300ms 600ms">
                                                <Markdown>
                                                    {projectDescription}
                                                </Markdown>
                                            </TextAppear>
                                        </>
                                    )}
                                    <Markdown>{screenshot?.description}</Markdown>
                                </>
                            }
                            contentChildren={(
                                <ScreenShot
                                    screenshot={screenshot}
                                />
                            )}
                        />
                    )}
                )}
            </Layer>

            {relatedProjects ? (
                <Layer>
                    <Layout
                        contentProps={{
                            bleedBottom: 'bleed',
                        }}
                        contentChildren={
                            <ProjectGrid
                                items={relatedProjects}
                                renderItem={project => (
                                    <Link
                                        key={project?.slug}
                                        href={`/projects/${project?.slug}`}
                                    >
                                        <Card project={project} />
                                    </Link>
                                )}
                            />
                        }
                    />
                </Layer>
            ) : null}
        </>
    )
}
