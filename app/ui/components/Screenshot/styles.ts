import { css } from '@/styled-system/css'

export const screenshot = css({
    display: 'grid',
    gridTemplateColumns: { base: '1fr 130px 20px', sm: '1fr 190px 20px'},
    gridAutoRows: { base: '150px 1fr', sm: '200px 1fr'},
})

export const desktop = css({
    gridColumn: { base: '1 / 4', sm: '1 / 3'},
    gridRow: '1 / 3',
})

export const mobile = css({
    gridColumn: { base: '2 / 3', sm: '2 / 4'},
    gridRow: '2 / 3'
})
