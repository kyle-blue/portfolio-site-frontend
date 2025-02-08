import styled from "@emotion/styled";

export const Spacer = styled.div`
    flex-grow: 1;
`

export const MarginSpacer = styled.div<{size: number}>`
    margin: ${({size}) => size}px;
`