import React from 'react';

// import Canvas from '../Canvas';
import * as styles from "./styles";
import TextSlideIn from '../TextSlideIn';

export type ProjectHeaderProps = {
    name?: string;
    client?: string;
}

const ProjectHeader = ({
    name,
    client,
}: ProjectHeaderProps) => (
    <header className={styles.header}>
        <TextSlideIn transition="300ms">
            <h1 className={styles.title}>{name}</h1>
        </TextSlideIn>
        <TextSlideIn transition="300ms 300ms">
            <h2 className={styles.subtitle}>{client}</h2>
        </TextSlideIn>
    </header>
);


export default ProjectHeader;
