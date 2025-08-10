import { css } from '@/styled-system/css';

export const screenshot = css({
    display: 'grid',
    gridTemplateColumns: { base: '1fr 130px 20px', sm: '1fr 190px 20px' },
    gridAutoRows: { base: '150px 1fr', sm: '200px 1fr' },
    alignItems: 'flex-start',
    mr: { lg: '-20px' },
});

export const desktop = css({
    gridColumn: { base: '1 / 4', sm: '1 / 3' },
    gridRow: '1 / 3',
});

export const desktopSkeleton = css({
    scale: '0.97',
});

export const desktopContent = css({
    opacity: 1,
    scale: '1',
    transition: '300ms',

    _starting: {
        opacity: 0,
        scale: '0.97',
    },
});

export const mobile = css({
    gridColumn: { base: '2 / 3', sm: '2 / 4' },
    gridRow: '2 / 3',
});

export const mobileContent = css({
    opacity: 1,
    scale: '1',
    transition: '300ms 300ms',

    _starting: {
        opacity: 0,
        scale: '0.99',
    },
});
