import { css } from '@/styled-system/css';
import { hstack } from '@/styled-system/patterns';

export const header = css({
    overflow: 'hidden',
    p: { base: '30px 0 25px', sm: '10px 0' },
    mb: '30px',
    color: 'black',
    textShadow: '1px 1px #fff',
    fontWeight: 700,
    pos: 'relative',
    _before: {
        '--header-clip-path-left-bottom-y': { base: '15px', sm: '25px' },
        content: '""',
        display: 'block',
        clipPath: `polygon(
                0 0,
                100% 0,
                100% 100%,
                0 calc(100% - var(--header-clip-path-left-bottom-y))
            )`,
        h: { base: '25px', sm: '30px' },
        w: '100%',
        bg: '#000',
        pos: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
});

export const content = css({
    py: { base: '10px', sm: '3vmin' },
});

export const lockup = hstack({
    gap: '20px',
});

export const lockupBlock = css({});

export const logo = css({
    display: 'block',
    mb: 0,
    w: { base: '40px', sm: '64px' },
    h: 'auto',
    transition: 'scale 0.2s',
    _hover: {
        scale: 1.1,
    },
});

export const name = css({
    clamp: '24px 30px',
    mb: 0,
});

export const role = css({
    mb: 0,
});

export const canvas = css({
    '--canvas-bottom-right-offset-y': { base: '15px', sm: '40px' },
    left: 0,
    w: '110%',
    h: '110%',
    pos: 'absolute',
    bottom: 0,
    backfaceVisibility: 'hidden',
    clipPath: `polygon(
        0 0,
        100% 0,
        100% calc(100% - var(--canvas-bottom-right-offset-y)),
        0 100%
    );`,
});
