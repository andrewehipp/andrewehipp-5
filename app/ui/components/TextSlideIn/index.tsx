import React from "react";

import * as styles from "./styles";

export type TextSlideInProps = {
    children: React.ReactNode;
    transition?: React.CSSProperties['transition'];
};

const TextSlideIn = ({ children, transition }: TextSlideInProps) => (
    <div className={styles.textWrap}>
        <div className={styles.text} style={{ transition }}>{children}</div>
    </div>
);

export default TextSlideIn;
