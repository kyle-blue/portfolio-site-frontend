import styled from '@emotion/styled'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const Spacer = styled.div`
    flex-grow: 1;
`

export const MarginSpacer = styled.div<{ size: number; responsive?: boolean }>`
    ${({ size, responsive = true }) => {
        if (responsive) return mediaQueriesIncludingDefault((multiplier) => `margin: ${size * multiplier}px`)
        return `margin: ${size}px`
    }}
`
