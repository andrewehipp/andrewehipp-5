import React from 'react';

import * as styles from './styles';
import { ContentVariants } from './styles';
import Layer from '../Layer';

export type LayoutProps = {
    contentChildren: React.ReactNode;
    sidebarChildren?: React.ReactNode;
    contentProps?: ContentVariants;
};

const Layout = ({
    contentProps,
    sidebarChildren,
    contentChildren,
}: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <div className={styles.aside}>{sidebarChildren}</div>
            <div className={styles.content(contentProps)}>
                <Layer>{contentChildren}</Layer>
            </div>
        </div>
    );
};

export default Layout;
