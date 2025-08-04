"use client";

import React from "react";
import Image from "next/image";

import Video from "../Video";

import * as styles from "./styles";
import { ProjectPageQuery } from "@/__generated__/graphql";

export type BrowserProps = {
    title: string;
    asset: NonNullable<
        NonNullable<
            NonNullable<
                NonNullable<
                    ProjectPageQuery["projectCollection"]
                >["items"][number]
            >["screenshotsCollection"]
        >["items"][number]
    >["desktop"];
};

const Browser = ({ title, asset }: BrowserProps) => {
    if (!asset) {
        return null;
    }
    const url = asset.url || "";

    return (
        <div className={styles.browser}>
            <span className={styles.title}>{title}</span>

            <div
                style={{
                    aspectRatio:
                        asset.contentType === "video/mp4"
                            ? "1440 / 900"
                            : `${asset.width} / ${asset.height}`,
                }}
            >
                {asset.contentType === "video/mp4" ? (
                    <Video loop muted playsInline>
                        <source src={url} type={asset.contentType} />
                    </Video>
                ) : (
                    <Image
                        src={url}
                        alt={title}
                        width={1000}
                        height={asset?.height || 1000}
                        className={styles.image}
                    />
                )}
            </div>
        </div>
    );
};

export default Browser;
