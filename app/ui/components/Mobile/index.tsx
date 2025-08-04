import React from "react";
import Image from "next/image";

import { ProjectPageQuery } from "@/__generated__/graphql";

import * as styles from "./styles";
import Video from "../Video";

export type MobileProps = {
    asset: NonNullable<
        NonNullable<
            NonNullable<
                NonNullable<
                    ProjectPageQuery["projectCollection"]
                >["items"][number]
            >["screenshotsCollection"]
        >["items"][number]
    >["mobile"];
};

const Mobile = ({ asset }: MobileProps) => {
    if (!asset) {
        return null;
    }

    const url = asset?.url || "";

    return (
        <div className={styles.mobile}>
            <div className={styles.inner}>
                <div className={styles.viewer}>
                    {asset.contentType === "video/mp4" ? (
                        <Video loop muted playsInline>
                            <source src={url} type="video/mp4" />
                        </Video>
                    ) : (
                        <Image
                            className={styles.image}
                            width={asset?.width || 210}
                            height={asset?.height || 375}
                            src={url}
                            alt=""
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mobile;
