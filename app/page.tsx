import client from "./lib/utilities/apollo";
import Link from "next/link";

import Layout from "./ui/components/Layout";
import About from "./ui/components/About";
import ProjectGrid from "./ui/components/ProjectGrid";
import Card from "./ui/components/Card";

import { HomePageQuery } from "@/__generated__/graphql";

import { LayoutGridItemVariants } from "./ui/components/ProjectGrid/styles";
import { GET_HOME_PAGE } from "./lib/queries/getHomePage";

const layout: LayoutGridItemVariants = {
    0: { width: "wide" },
    1: { align: "alignBottom" },
    6: { width: "wide" },
    7: { width: "wide" },
    13: { width: "wide" },
};

export default async function Home() {
    const { data } = await client.query<HomePageQuery, HomePageQueryVariables>({
        query: GET_HOME_PAGE,
    });

    const { about, projectsCollection } =
        data?.projectListingCollection?.items?.[0] || {};

    const projects = projectsCollection?.items;
    if (!projects) {
        return;
    }
    return (
        <Layout
            contentProps={{
                bleedBottom: "bleed",
                bleedTop: "bleed",
            }}
            sidebarChildren={<About body={about || ""} />}
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
