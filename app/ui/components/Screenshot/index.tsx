"use client";

import React from "react";

import * as styles from "./styles";
import Browser from "../Browser";
import Mobile from "../Mobile";
import { ProjectPageQuery } from "@/__generated__/graphql";
import imageLoaded from "@/app/lib/utilities/imageLoaded";

export type ScreenshotProps = {
    screenshot: NonNullable<
        NonNullable<
            NonNullable<ProjectPageQuery["projectCollection"]>["items"][number]
        >["screenshotsCollection"]
    >["items"][number];
};

const Screenshot = ({ screenshot }: ScreenshotProps) => {
    const blockRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleLoaded = async () => {
            const desktop = screenshot?.desktop;
            const mobile = screenshot?.mobile;

            // Preload assets if they exist and aren't videos
            await Promise.all([
                desktop?.url && desktop?.contentType !== 'video/mp4' ? imageLoaded(desktop.url) : undefined,
                mobile?.url && mobile?.contentType !== 'video/mp4' ? imageLoaded(mobile.url) : undefined,
            ]);

            if (blockRef.current) {
                blockRef.current.classList.add("is-loaded");
            }
    };

        handleLoaded();
    }, [screenshot?.desktop, screenshot?.mobile]);

    return (
        <div ref={blockRef} className={styles.screenshot}>
            <div className={styles.desktop}>
                <Browser
                    title={screenshot?.name || ""}
                    asset={screenshot?.desktop}
                />
            </div>

            {screenshot?.mobile ? (
                <div className={styles.mobile}>
                    <Mobile asset={screenshot?.mobile} />
                </div>
            ) : null}
        </div>
    );
};

export default Screenshot;
