import styled from '@emotion/styled'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

const labelFontSize = 14
export const IconsLabel = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    vertical-align: top;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${labelFontSize * multiplier}px;
        margin-top: ${(-labelFontSize - 10) * multiplier}px;
    `,
    )}
`

export const IconsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: ${10 * multiplier}px 0;
        border-radius: ${8 * multiplier}px;
        border: ${1 * multiplier}px solid rgba(255, 255, 255, 0.35);
    `,
    )}
`

export const AssetIconContainer = styled.div<{ width: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${({ width }) => width};
`
