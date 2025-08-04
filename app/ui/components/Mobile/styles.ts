import { css } from "@/styled-system/css";

export const mobile = css({
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
    bg: '#000',
});

export const inner = css({
    pt: 60 / 375 * 100 + '%',
    pb: 40 / 375 * 100 + '%',
});

export const viewer = css({
    overflow: 'hidden',
    aspectRatio: '210 / 375',
});

export const image = css({
    m: 0,
});
