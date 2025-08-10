import { css } from '@/styled-system/css';

export const card = css({});

export const content = css({
    overflow: 'hidden',
    color: '#fff',
    pos: 'relative',
    clipPath: `
        polygon(
            0 100%,
            0 100%,
            0 100%
        );
    `,
    transformOrigin: 'center top',
    transition: '300ms',
    scale: '0.95',

    '.is-loaded &': {
        clipPath: `
            polygon(
                0 -100%,
                200% 100%,
                0 100%
            );
        `,
        scale: '1',
    },
});

export const image = css({
    m: 0,
    transition: '2s',

    _groupHover: {
        scale: '1.025',
    },
});

export const header = css({
    p: '10px',
    w: '100%',
    pos: 'absolute',
    bottom: '-1px',
    left: 0,
    zIndex: 1,
    transition: '300ms',

    _before: {
        content: '""',
        opacity: 0.8,
        display: 'block',
        width: '100%',
        height: '150px',
        bgGradient: `linear-gradient(
            to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, .98) 9.9%,
            rgba(0, 0, 0, .94) 19%,
            rgba(0, 0, 0, .88) 26.7%,
            rgba(0, 0, 0, .80) 33.1%,
            rgba(0, 0, 0, .72) 38.6%,
            rgba(0, 0, 0, .63) 43.5%,
            rgba(0, 0, 0, .54) 48.1%,
            rgba(0, 0, 0, .45) 52.6%,
            rgba(0, 0, 0, .36) 57.1%,
            rgba(0, 0, 0, .27) 62%,
            rgba(0, 0, 0, .19) 67.5%,
            rgba(0, 0, 0, .11) 73.9%,
            rgba(0, 0, 0, .05) 81.6%,
            rgba(0, 0, 0, .01) 90.7%,
            rgba(0, 0, 0, .0) 100%)
        `,
        pos: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -1,

        _groupHover: {
            opacity: 0,
        },
    },
});

export const title = css({
    mb: '3px',
    color: '#fff',
    fontSize: '19px',
    fontWeight: 'bold',
    lineHeight: 21 / 18,
    opacity: 1,
    y: '0',
    transition: '200ms',

    _groupHover: {
        opacity: 0,
        transform: 'translateY(30px)',
    },
});

export const client = css({
    m: 0,
    color: 'green',
    fontSize: '13px',
    opacity: 1,
    y: '0',
    transition: '200ms 200ms',

    _groupHover: {
        opacity: 0,
        transform: 'translateY(30px)',
        transition: '200ms',
    },
});
