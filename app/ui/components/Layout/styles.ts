import { css, cva, type RecipeVariantProps } from '@/styled-system/css'

export const layout = css({
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: { sm: '1fr 2fr' },
    mb: { base: '20px', sm: '60px' },
});

export const content = cva({
    variants: {
        bleedTop: {
            bleed: {
                mt: { sm: '-130px' },
            }
        },
        bleedBottom: {
            bleed: {
                mb: '-75px',
            }
        }
    },
});

export const aside = css({
    mt: { sm: '50px' },
    position: { sm: 'relative' },
})

export type ContentVariants = RecipeVariantProps<typeof content>;
