import { css } from '@/styled-system/css';

export const header = css({
    display: 'grid',
    gap: '5px',
    mb: '20px',
});

export const title = css({
    clamp: '28px 36px',
    lineHeight: 39 / 36,
    fontWeight: 700,
    m: 0,
});

export const subtitle = css({
    color: 'white/70',
    clamp: '16px 18px',
    lineHeight: 1,
    m: 0,
});
