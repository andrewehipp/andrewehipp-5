import React from 'react';

import * as styles from './styles';
import { LayoutItemVariants } from './styles';

export type ProjectGridProps<P> = {
    items: P[];
    renderItem: (item: P, index: number, items: P[]) => React.ReactNode;
    layout?: Record<number, LayoutItemVariants>;
};

const ProjectGrid = <P,>({
    items,
    renderItem,
    layout = {},
}: ProjectGridProps<P>) => (
    <ul className={styles.grid}>
        {items.map((item, itemIndex) => {
            return (
                <li key={itemIndex} className={styles.item(layout[itemIndex])}>
                    {renderItem(item, itemIndex, items)}
                </li>
            );
        })}
    </ul>
);

export default ProjectGrid;
