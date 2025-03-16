import styled from '@emotion/styled'
import ScrollAnimation from 'react-animate-on-scroll'
import { mediaQueriesIncludingDefault, mediaQueryMobile, ScreenMultipliers } from '../../utils/mobile'

const rowHeight = 270
const jobBoxHeight = 360
const jobBoxWidth = 480
const descriptionHeight = 100

export const MainContainer = styled.div<{ numElements: number }>`
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto;
    padding: 0;

    ${({ numElements }) =>
        mediaQueriesIncludingDefault(
            (multiplier) => `
            width: ${1200 * multiplier}px;
            margin-bottom: ${(jobBoxHeight - rowHeight) * multiplier}px;
            grid-template-rows: repeat(${numElements}, ${rowHeight * multiplier}px);
    
        `,
        ) +
        mediaQueryMobile(`
            grid-template-rows: ${(rowHeight * ScreenMultipliers.MOBILE) / 2}px repeat(${numElements * 2 - 1}, ${rowHeight * ScreenMultipliers.MOBILE}px) ${(rowHeight * ScreenMultipliers.MOBILE) / 2}px;
            grid-template-columns: auto;
            
        `)}
`

export const JobBox = styled(ScrollAnimation)<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 1 : 5)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        border-radius: ${14 * multiplier}px;
        padding: ${20 * multiplier}px ${40 * multiplier}px;
        width: ${jobBoxWidth * multiplier}px;
        height: ${jobBoxHeight * multiplier}px;
    `,
    )}

    ${({ num }) =>
        mediaQueryMobile(`
        height: ${jobBoxHeight * ScreenMultipliers.MOBILE * 1.1}px;
        max-width: 95vw;
        grid-row: ${(num + 1) * 2} / span 1;
        grid-column: 1 / span 1;
        margin-left: auto;
        margin-right: auto;
        background: #bea4ce;
        z-index: 5;
    `)}
`

export const HorizontalLine = styled(ScrollAnimation)<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 2 : 4)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${(jobBoxHeight / 2 - 2) * multiplier}px;
        border-bottom: ${2 * multiplier}px dashed rgba(255, 255, 255, 0.5);
    `,
    )}
`

export const DateContainer = styled(ScrollAnimation)<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 4 : 2)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    display: flex;
    justify-content: ${({ num }) => (num % 2 == 0 ? 'left' : 'right')};
    align-items: center;
    max-width: 100%;
    position: relative;
    overflow: visible;
    box-sizing: border-box;

    & > p {
        color: #ffffff;
        font-family: 'Poppins Light', sans-serif;
        font-weight: normal;
        min-width: max-content;
        position: absolute;
        text-align: ${({ num }) => (num % 2 == 0 ? 'left' : 'right')};
    }

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: 0 ${20 * multiplier}px;
        height: ${jobBoxHeight * multiplier}px;


        & > p {
            font-size: ${15 * multiplier}px;
        }
    `,
    )}
`

export const VerticalLineContainer = styled.div<{ numRows: number }>`
    grid-column: 3 / span 1;
    grid-row: 1 / span ${({ numRows }) => numRows};

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin-top: ${((jobBoxHeight - rowHeight) / 2) * multiplier}px;
    `,
    )}

    ${({ numRows }) =>
        mediaQueryMobile(`
            grid-column: 1 / span 1;
            grid-row: 1 / span ${numRows * 2 + 1};
        `)}
`

export const VerticalLine = styled.div`
    border: 0;
    margin: 0;
    height: 100%;
    padding: 0;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin-left: ${1 * multiplier}px;
        border-left: ${3 * multiplier}px dashed rgba(255, 255, 255, 1);
    `,
    )}
`

export const Circle = styled.div`
    background-color: #ffffff;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom: auto;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${40 * multiplier}px;
        width: ${40 * multiplier}px;
    `,
    )}
`
export const CircleContainer = styled(ScrollAnimation)<{ num: number }>`
    grid-column: 3 / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${jobBoxHeight * multiplier}px;
    `,
    )}

    ${({ num }) =>
        mediaQueryMobile(`
        grid-column: 1 / span 1;
        grid-row: ${num};
        flex-direction: column;
    `)}
`
export const Title = styled.h1`
    color: #ffffff;
    font-family: 'Poppins Semi Bold', sans-serif;
    margin: 0;
    font-weight: normal;
    align-self: self-start;
    text-align: left;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${24 * multiplier}px;
        margin-bottom: ${5 * multiplier}px;
        letter-spacing: ${4 * multiplier}px;
    `,
    )}
`
export const Subtitle = styled.h2`
    margin: 0;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    white-space: pre-wrap;
    text-align: left;
    align-self: self-start;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${16 * multiplier}px;
        margin-bottom: ${15 * multiplier}px;
    `,
    )}
`
export const Description = styled.span`
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    text-overflow: ellipsis;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${16 * multiplier}px;
    `,
    )}
`

export const DescriptionContainer = styled.div`
    mask-image: linear-gradient(180deg, #000 60%, transparent);
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${descriptionHeight * multiplier}px;
    `,
    )}
`

export const InnerModalContainer = styled.div`
    max-height: 90vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 20px;
    max-width: 100vw;
    & > ul > li {
        font-size: 15px;
        font-family: 'Poppins Light', sans-serif;
        color: #414141;
        margin-bottom: 30px;
    }
    & li {
        font-size: 15px;
        font-family: 'Poppins Light', sans-serif;
        color: #414141;
    }

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${800 * multiplier}px;
        padding: ${10 * multiplier}px ${70 * multiplier}px;
        padding-bottom: ${20 * multiplier}px;

        & > ul > li {
            font-size: ${15 * multiplier}px;
        }
        & li {
            font-size: ${15 * multiplier}px;
        }
    `,
    )}
    ${mediaQueryMobile(`
        padding: 20px 25px;

        & li {
            margin-left: -15px
        }
    `)}
`

export const ModalSubtitle = styled.h2`
    font-family: 'Poppins Light', sans-serif;
    color: #414141;
    margin: 0;
    text-align: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${18 * multiplier}px;
    `,
    )}
`

export const ModalDate = styled.h3`
    font-family: 'Poppins Light', sans-serif;
    color: #5e5e5e;
    margin: 0;
    text-align: center;
    font-weight: lighter;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${16 * multiplier}px;
        margin-bottom: ${30 * multiplier}px;
    `,
    )}
`
