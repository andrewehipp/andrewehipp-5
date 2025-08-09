import { Metadata } from "next";

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
import {
    ProjectPageMetaQuery,
    ProjectPageMetaQueryVariables,
    ProjectPageQuery,
    ProjectPageQueryVariables,
} from "@/__generated__/graphql";
import { GET_PROJECT_PAGE_META } from "@/app/lib/queries/getProjectPageMeta";
import { GET_PROJECT_COLLECTION } from "@/app/lib/queries/getProjectCollection";
import { GET_PROJECT_PAGE } from "@/app/lib/queries/getProjectPage";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const { data } = await client.query<
        ProjectPageMetaQuery,
        ProjectPageMetaQueryVariables
    >({
        query: GET_PROJECT_PAGE_META,
        variables: {
            slug,
        },
    });

    const { name: projectName, description: projectDescription } =
        data?.projectCollection?.items?.[0] || {};

    return {
        title: projectName,
        description: projectDescription,
    };
}

export async function generateStaticParams() {
    const { data } = await client.query({
        query: GET_PROJECT_COLLECTION,
    });

    return data.projectCollection.items.map(({ slug }: { slug: string }) => ({
        slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const { data } = await client.query<
        ProjectPageQuery,
        ProjectPageQueryVariables
    >({
        query: GET_PROJECT_PAGE,
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

    const { projectsCollection: relatedProjectsCollection } =
        data?.projectListingCollection?.items?.[0] || {};

    const relatedProjectsCollectionItems =
        relatedProjectsCollection?.items || [];

    const projectIndex = relatedProjectsCollectionItems.findIndex(
        (p) => p?.slug === slug,
    );
    const relatedProjects =
        projectIndex !== -1
            ? [
                  ...relatedProjectsCollectionItems,
                  ...relatedProjectsCollectionItems,
              ].slice(projectIndex + 1, projectIndex + 4)
            : undefined;

    return (
        <>
            <Layer>
                {screenshots.map((screenshot, screenshotIndex) => {
                    if (!screenshot) {
                        return null;
                    }
                    return (
                        <Layout
                            key={screenshot?._id}
                            contentProps={{
                                bleedTop:
                                    screenshotIndex === 0 ? "bleed" : undefined,
                            }}
                            sidebarChildren={
                                <>
                                    {screenshotIndex === 0 && (
                                        <>
                                            <ProjectHeader
                                                name={projectName || ""}
                                                client={projectClient || ""}
                                            />
                                            <TextAppear transition="300ms 600ms">
                                                <Markdown>
                                                    {projectDescription}
                                                </Markdown>
                                            </TextAppear>
                                        </>
                                    )}
                                    <TextAppear transition="300ms 600ms">
                                        <Markdown>
                                            {screenshot?.description}
                                        </Markdown>
                                    </TextAppear>
                                </>
                            }
                            contentChildren={
                                <ScreenShot screenshot={screenshot} />
                            }
                        />
                    );
                })}
            </Layer>

            {relatedProjects ? (
                <Layer>
                    <Layout
                        contentProps={{
                            bleedBottom: "bleed",
                        }}
                        contentChildren={
                            <ProjectGrid
                                items={relatedProjects}
                                renderItem={(project) => (
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
    );
}
