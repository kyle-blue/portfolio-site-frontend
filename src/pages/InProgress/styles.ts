import styled from '@emotion/styled'
import ResponsiveButton from '../../components/Button'
import Construction from '../../assets/svg/construction.svg'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100%;
    position: fixed;
    background: rgb(138, 121, 173);
    background: linear-gradient(180deg, rgba(138, 121, 173, 1) 0%, rgba(174, 130, 181, 1) 100%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled(ResponsiveButton)`
    position: absolute;
    top: 0;
    left: 0;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin: ${30 * multiplier}px;
    `,
    )}
`

export const Title = styled.h1`
    font-family: 'Poppins Semi Bold', sans-serif;
    text-align: center;
    color: #ffffff;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${30 * multiplier}px;
    `,
    )}
`

export const Subtitle = styled.h1`
    font-family: 'Poppins Light', sans-serif;
    text-align: center;
    color: #ffffff;
    overflow: hidden;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${500 * multiplier}px;
        font-size: ${16 * multiplier}px;
    `,
    )}
`

export const ConstructionSvg = styled(Construction as any)`
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${400 * multiplier}px;
        margin-bottom: ${20 * multiplier}px;
    `,
    )}
`
