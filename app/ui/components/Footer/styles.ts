import { css } from '@/styled-system/css';

export const footer = css({
    overflow: 'hidden',
    p: '120px 0 20px',
    color: 'white/80',
    pos: 'relative',
    zIndex: 0,
    _after: {
        content: '""',
        display: 'block',
        width: '105%',
        bg: '#000',
        pos: 'absolute',
        top: '60px',
        left: 0,
        bottom: 0,
        zIndex: 2,
        transformOrigin: 'left top',
        clipPath: `
            polygon(
                0 0,
                100% 40px,
                100% 101%,
                0 101%
            );
        `,
    },
});

export const canvas = css({
    display: 'block',
    h: '150px',
    w: '100%',
    pos: 'absolute',
    top: '0',
    right: '0',
    zIndex: 1,
    clipPath: `
        polygon(
            0 40px,
            100% 0,
            100% 100%,
            0 100%
        );
    `,
});
