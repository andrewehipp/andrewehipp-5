'use client';

import React from 'react';

import ParticleEffect from './ParticleEffect';
import { cx } from '@/styled-system/css';
import * as styles from './styles';

export type CanvasProps = {} & React.ComponentPropsWithoutRef<'canvas'>;

const Canvas = ({ className, ...props }: CanvasProps) => {
    const canvas = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if (canvas.current) {
            const effect = new ParticleEffect(canvas.current);

            effect.play();
        }
    }, []);

    const classes = cx('group', styles.canvas, className);

    return <canvas ref={canvas} className={classes} {...props} aria-hidden />;
};

export default Canvas;
