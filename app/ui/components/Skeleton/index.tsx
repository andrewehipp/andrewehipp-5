import React from 'react';

import * as styles from './styles';
import { cx } from '@/styled-system/css';

export type SkeletonProps = {
    width: number;
    height: number;
} & React.ComponentPropsWithoutRef<'div'>;

const Skeleton = ({ width, height, className }: SkeletonProps) => (
    <div
        className={cx(styles.block, className)}
        style={{ aspectRatio: `${width} / ${height}` }}
    />
);

export default Skeleton;
