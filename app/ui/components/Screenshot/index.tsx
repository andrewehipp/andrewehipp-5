"use client";

import React from "react";

import * as styles from "./styles";
import Browser from "../Browser";
import Mobile from "../Mobile";
import { ProjectPageQuery } from "@/__generated__/graphql";

export type ScreenshotProps = {
    screenshot: NonNullable<
        NonNullable<
            NonNullable<ProjectPageQuery["projectCollection"]>["items"][number]
        >["screenshotsCollection"]
    >["items"][number];
};

const Screenshot = ({ screenshot }: ScreenshotProps) => {
    const blockRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className={styles.screenshot} ref={blockRef}>
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
