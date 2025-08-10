import React from 'react';
import * as styles from './styles';

export type ContainerProps = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

const Container = ({ children }: ContainerProps) => (
    <div className={styles.container}>{children}</div>
);

export default Container;
