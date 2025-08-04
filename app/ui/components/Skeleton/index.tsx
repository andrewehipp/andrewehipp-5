import React from 'react';

import * as styles from './styles';

export type SkeletonProps = {
    width: number,
    height: number,
} & React.ComponentPropsWithoutRef<'div'>;

const Skeleton = ({ width, height }: SkeletonProps) => (
    <div className={styles.block} style={{ aspectRatio: `${width} / ${height}` }}/>
);

export default Skeleton;
