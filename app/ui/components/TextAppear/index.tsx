import React from 'react';

import * as styles from './styles';

export type TextAppearProps = {
    children: React.ReactNode;
    transition?: React.CSSProperties['transition'];
};

const TextAppear = ({ children, transition }: TextAppearProps) => (
    <span className={styles.text} style={{ transition }}>
        {children}
    </span>
);

export default TextAppear;
