"use client";

import React from "react";

import * as styles from "./styles";
import Browser from "../Browser";
import Mobile from "../Mobile";
import { ProjectPageQuery } from "@/__generated__/graphql";
import imageLoaded from "@/app/lib/utilities/imageLoaded";
import Skeleton from "../Skeleton";

export type ScreenshotProps = {
    screenshot: NonNullable<
        NonNullable<
            NonNullable<ProjectPageQuery["projectCollection"]>["items"][number]
        >["screenshotsCollection"]
    >["items"][number];
};

const Screenshot = ({ screenshot }: ScreenshotProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const handleLoaded = async () => {
            const desktop = screenshot?.desktop;
            const mobile = screenshot?.mobile;

            // Preload assets if they exist and aren't videos
            await Promise.all([
                desktop?.url && desktop?.contentType !== 'video/mp4' ? imageLoaded(desktop.url) : undefined,
                mobile?.url && mobile?.contentType !== 'video/mp4' ? imageLoaded(mobile.url) : undefined,
            ]);

            setIsLoaded(true);
        };

        handleLoaded();
    }, [screenshot?.desktop, screenshot?.mobile]);

    return (
        <div className={styles.screenshot}>
            <div className={styles.desktop}>
                <div className={styles.desktopContent}>
                    {isLoaded ? (
                        <Browser
                            title={screenshot?.name || ""}
                            asset={screenshot?.desktop}
                        />
                    ) : (
                        <Skeleton
                            width={screenshot?.desktop?.width || 1}
                            height={screenshot?.desktop?.height || 1}
                        />
                    )}
                </div>
            </div>

            {screenshot?.mobile ? (
                <div className={styles.mobile}>
                    <div className={styles.mobileContent}>
                        {isLoaded ? (
                            <Mobile asset={screenshot?.mobile} />
                        ) : (
                            <Skeleton
                                width={screenshot?.mobile?.width || 1}
                                height={screenshot?.mobile?.height || 1}
                            />
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Screenshot;
