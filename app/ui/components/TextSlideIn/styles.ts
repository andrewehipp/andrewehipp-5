import { css } from '@/styled-system/css'

export const textWrap = css({
    overflow: 'hidden',
})

export const text = css({
    overflow: 'hidden',
    transform: 'none',
    transition: '300ms',
    _starting: {
        transform: 'translateY(100%)',
    }
})
