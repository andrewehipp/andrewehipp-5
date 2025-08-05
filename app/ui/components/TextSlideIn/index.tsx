import React from "react";

import * as styles from "./styles";

export type TextSlideInProps = {
    children: React.ReactNode;
    transition?: React.CSSProperties['transition'];
};

const TextSlideIn = ({ children, transition }: TextSlideInProps) => (
    <span className={styles.textWrap}>
        <span className={styles.text} style={{ transition }}>{children}</span>
    </span>
);

export default TextSlideIn;
