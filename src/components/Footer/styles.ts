import styled from '@emotion/styled'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const MainContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: ${30 * multiplier}px;
        font-size: ${12 * multiplier}px;
    `,
    )}
`
export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: pre;
    text-align: left;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${500 * multiplier}px;
        font-size: ${15 * multiplier}px;
    `,
    )}
`
