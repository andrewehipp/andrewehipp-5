import React from 'react';

import * as styles from './styles';

export type LayerProps = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

const Layer = ({ children }: LayerProps) => (
    <div className={styles.layer}>{children}</div>
);

export default Layer;
