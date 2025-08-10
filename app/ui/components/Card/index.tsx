'use client';

import React from 'react';

import { aspectRatio } from '@/styled-system/patterns';
import { cx } from '@/styled-system/css';
import imageLoaded from '@/app/lib/utilities/imageLoaded';

import * as styles from './styles';
import { HomePageQuery } from '@/__generated__/graphql';

export type CardProps = {
    delay?: number;
    project: NonNullable<
        NonNullable<
            NonNullable<
                HomePageQuery['projectListingCollection']
            >['items'][number]
        >['projectsCollection']
    >['items'][number];
};

const Card = ({ project, delay = 0 }: CardProps) => {
    const card = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleLoaded = async (entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio > 0) {
                await imageLoaded(project?.fullThumbnail?.url || '');
                entry.target.classList.add('is-loaded');
            }
        };

        const handleInView: IntersectionObserverCallback = (entries) => {
            entries.forEach(handleLoaded);
        };

        const intersectionObserverOptions = {
            rootMargin: '0px',
            scrollMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(
            handleInView,
            intersectionObserverOptions
        );

        if (card.current) {
            observer.observe(card.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [project?.fullThumbnail?.url]);

    // Remove the delay after the delay would have ellapsed
    const [animationDelay, setAnimationDelay] = React.useState(delay);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationDelay(0);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <article ref={card} className={cx('group', styles.card)}>
            <div
                className={styles.content}
                style={{ transitionDelay: `${animationDelay}ms` }}
            >
                <div className={aspectRatio({ ratio: 16 / 9 })}>
                    {project?.fullThumbnail?.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={project?.fullThumbnail?.url}
                            alt={project?.name || ''}
                            className={styles.image}
                            loading="lazy"
                        />
                    ) : null}
                </div>
                <header className={styles.header}>
                    <h3 className={styles.title}>{project?.name}</h3>
                    <h5 className={styles.client}>{project?.client}</h5>
                </header>
            </div>
        </article>
    );
};

export default Card;
