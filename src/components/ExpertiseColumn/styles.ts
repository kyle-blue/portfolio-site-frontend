import styled from '@emotion/styled'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const MainContainer = styled.div`
    box-sizing: border-box;
    height: fit-content;
    max-width: 95vw;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: ${50 * multiplier}px ${40 * multiplier}px;
        border: ${5 * multiplier}px solid rgba(255, 255, 255, 0.25);
        border-radius: ${8 * multiplier}px;
        width: ${375 * multiplier}px;
    `,
    )}
`

export const Title = styled.h1`
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Poppins Bold', sans-serif;
    font-weight: normal;
    text-align: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${28 * multiplier}px;
        letter-spacing: ${6 * multiplier}px;
    `,
    )}
`

export const Subtitle = styled.h2`
    color: #ffffff;
    font-family: 'Poppins light', sans-serif;
    font-weight: normal;
    text-align: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${16 * multiplier}px;
    `,
    )}
`

export const RowText = styled.p`
    color: #ffffff;
    margin: 0;
    font-family: 'Jetbrains Mono Medium', sans-serif;
    font-weight: normal;
    text-align: center;
    white-space: pre-wrap;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${16 * multiplier}px;
    `,
    )}
`
export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${15 * multiplier}px;
    `,
    )}
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${15 * multiplier}px;
    `,
    )}
`
export const AllRowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${50 * multiplier}px;
        margin-top: ${40 * multiplier}px;
    `,
    )}
`
