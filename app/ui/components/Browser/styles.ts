import { css } from '@/styled-system/css'

export const browser = css({
    bg: '#000',
    boxShadow: '0 0 3px rgba(48,57,51,.25)',

    _after: {
        content: '""',
        opacity: 0.3,
        height: { base: '11px', sm: '25px' },
        pos: 'absolute',
        top: '1px',
        left: '1px',
        right: '1px',
    },
})

export const title = css({
    display: 'block',
    textAlign: 'center',
    fontSize: '10px',
    color: '#fff/70',
    lineHeight: '26px',
    width: '100%',
})

export const image = css({
    display: 'block',
    mb: 0,
    width: '100%',
})
