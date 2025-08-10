import { css } from '@/styled-system/css';

export const textWrap = css({
    display: 'block',
    overflow: 'hidden',
});

export const text = css({
    display: 'block',
    overflow: 'hidden',
    transform: 'none',
    transition: '300ms',
    _starting: {
        transform: 'translateY(100%)',
    },
});
