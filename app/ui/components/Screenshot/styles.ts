import { css } from '@/styled-system/css'

export const screenshot = css({
    display: 'grid',
    gridTemplateColumns: { base: '1fr 130px 20px', sm: '1fr 190px 20px'},
    gridAutoRows: { base: '150px 1fr', sm: '200px 1fr'},
    alignItems: 'flex-start',
})

export const desktop = css({
    gridColumn: { base: '1 / 4', sm: '1 / 3'},
    gridRow: '1 / 3',
    opacity: 0,
    scale: '0.99',
    transition: '300ms',

    '.is-loaded &': {
        opacity: 1,
        scale: '1',
    },
})

export const mobile = css({
    gridColumn: { base: '2 / 3', sm: '2 / 4'},
    gridRow: '2 / 3',
    opacity: 0,
    scale: '0.9',
    transition: '300ms 150ms',

    '.is-loaded &': {
        opacity: 1,
        scale: '1',
    },
})
