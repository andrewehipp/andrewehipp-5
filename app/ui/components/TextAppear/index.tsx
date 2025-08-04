import React from "react";

import * as styles from "./styles";

export type TextAppearProps = {
    children: React.ReactNode;
    transition?: React.CSSProperties['transition'];
};

const TextAppear = ({ children, transition }: TextAppearProps) => (
    <div className={styles.text} style={{ transition }}>{children}</div>
);

export default TextAppear;
