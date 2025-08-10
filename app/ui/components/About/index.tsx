import React from 'react';
import Markdown from '../Markdown';

import * as styles from './styles';
import TextSlideIn from '../TextSlideIn';
import TextAppear from '../TextAppear';

const lines = ['Front End Developer', 'Living in', 'Southern California'];

export type AboutProps = {
    body?: string;
};

const About = ({ body }: AboutProps) => {
    return (
        <div>
            <h1 className={styles.title}>
                {lines.map((line, index) => (
                    <TextSlideIn
                        key={line}
                        transition={`300ms ${100 * index}ms`}
                    >
                        {line}
                    </TextSlideIn>
                ))}
            </h1>

            <TextAppear transition={`300ms ${100 * (lines.length + 1)}ms`}>
                <Markdown>{body}</Markdown>
            </TextAppear>
        </div>
    );
};

export default About;
