import { css, cva, RecipeVariantProps } from '@/styled-system/css';

export const grid = css({
    listStyle: 'none',
    display: 'grid',
    gap: { base: '10px 0', sm: '10px' },
    gridTemplateColumns: {
        base: '1fr',
        sm: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
    },
    m: 0,
    p: 0,
});

export const item = cva({
    base: {},
    variants: {
        width: {
            wide: { gridColumn: 'span 2' },
        },
        align: {
            alignBottom: { alignSelf: 'end' },
        },
    },
});

export type LayoutItemVariants = RecipeVariantProps<typeof item>;
export type LayoutGridItemVariants = Record<number, LayoutItemVariants>;
