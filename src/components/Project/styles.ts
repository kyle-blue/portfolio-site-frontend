import styled from '@emotion/styled'
import ResponsiveButton from '../../components/Button'
import { mediaQueriesIncludingDefault, mediaQueryMobile } from '../../utils/mobile'

export const MainContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    display: flex;

    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
    ${mediaQueryMobile(`
        border-radius: 12px;
    `)}
`
export const InnerContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${30 * multiplier}px;
        padding: ${60 * multiplier}px;
    `,
    )}
`

export const Background = styled.div<{ backgroundImage: string | undefined }>`
    background: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : 'unset')};
    opacity: ${({ backgroundImage }) => (backgroundImage ? 0.1 : 'unset')};
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: -1;
`

export const UpperContainer = styled.div<{ layout: 'wide' | 'tall' }>`
    display: flex;
    align-items: center;
    vertical-align: middle;
    min-height: fit-content;
    flex-direction: ${({ layout }) => (layout === 'wide' ? 'row' : 'column')};
    margin-bottom: ${({ layout }) => (layout === 'wide' ? '75px' : '35px')};

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${20 * multiplier}px;
    `,
    )}
`
export const LowerContainer = styled.div<{ layout: 'wide' | 'tall' }>`
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: ${({ layout }) => (layout === 'wide' ? 'row' : 'column')};

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${15 * multiplier}px;
    `,
    )}
`

export const Title = styled.h1`
    margin: 0;
    color: #ffffff;
    font-family: 'Poppins Bold', sans-serif;
    font-weight: normal;
    flex: 1;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${28 * multiplier}px;
        letter-spacing: ${6 * multiplier}px;
    `,
    )}
`

export const Description = styled.p`
    word-wrap: normal;
    min-height: fit-content;
    overflow: hidden;

    box-sizing: border-box;
    color: #ffffff;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    margin: 0;
    flex: 1;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: ${10 * multiplier}px ${20 * multiplier}px;
        border-radius: ${8 * multiplier}px;
        font-size: ${14 * multiplier}px;
    `,
    )}
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${25 * multiplier}px;
    `,
    )}
`

export const Button = styled(ResponsiveButton)``
