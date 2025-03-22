import styled from '@emotion/styled'
import homeBackground from '../../assets/images/home-background.png'
import { Place } from '@mui/icons-material'
import Project from '../../components/Project'
import {
    mediaQueriesIncludingDefault,
    mediaQueryBigDesktop,
    mediaQueryDesktop,
    mediaQueryLaptop,
    mediaQueryMobile,
    ScreenWidths,
} from '../../utils/mobile'

export const RootContainer = styled.main`
    position: relative;
    height: fit-content;
    overflow: hidden;
    width: 100%;
    background: rgba(52, 43, 55, 0.6);
    background: linear-gradient(180deg, rgba(37, 197, 130, 0.2) -10%, rgba(210, 182, 236, 0.3) 110%);
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UnderBackground = styled.div`
    position: fixed;
    width: 100%;
    background: rgb(121, 173, 157);
    background: linear-gradient(180deg, #a3659b 0%, #997cbe 100%);
    z-index: -4;
    height: 100%;
`

const HomeImageOuter = styled.div`
    position: relative;
    height: 0px;
    background: red;

    overflow: visible;
    animation-duration: 1s;
    width: 100%;
    display: flex;
    justify-content: center;
`

const navbarHeight = 80
const HomeImageInner = styled.div`
    position: relative;
    display: block;

    margin-top: ${-navbarHeight}px;
    opacity: 0.7;
    z-index: -2;
    background: url(${homeBackground});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 0;

    height: 6000px; // As big as possible. Background size disables stretching
    width: 100%;

    ${mediaQueryBigDesktop(`background-size: ${ScreenWidths.BIG_DESKTOP}px;`)};
    ${mediaQueryDesktop(`background-size: ${ScreenWidths.DESKTOP}px;`)};
    ${mediaQueryLaptop(`background-size: ${ScreenWidths.LAPTOP}px;`)};
    ${mediaQueryMobile(`background-size: 1300px;`)};

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin-top: ${-navbarHeight * multiplier}px;
    `,
    )}
`

export const HomeImage = ({ className }: { className?: string }) => (
    <HomeImageOuter className={className}>
        <HomeImageInner />
    </HomeImageOuter>
)

export const HomeHeadingContainer = styled.div`
    text-align: center;
    // TODO: when mobilising get this to work for all screen sizes
    height: 850px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    & h1 {
        color: #ffffff;
        font-size: 85px;
        font-family: 'Poppins Semi Bold', sans-serif;
        font-weight: normal;
        letter-spacing: 24px;
        line-height: 95px;
        margin: 0;
    }
    & h2 {
        color: #ffffff;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
        letter-spacing: 8px;
        word-wrap: normal;
        & > b {
            font-family: 'Poppins Bold', sans-serif;
            font-weight: bold;
        }
    }
    & h3 {
        color: #ffffff;
        font-size: 16px;
        font-family: 'Poppins Thin', sans-serif;
        font-weight: bolder;
        letter-spacing: 6px;
        margin-bottom: 0;
        & > b {
            font-family: 'Poppins Bold', sans-serif;
            font-weight: bold;
        }
    }

    & h4 {
        color: #ffffff;
        font-size: 15px;
        font-family: 'Poppins Thin', sans-serif;
        font-weight: bolder;
        letter-spacing: 4px;
        margin-bottom: 0;

        & > b {
            font-family: 'Poppins Bold', sans-serif;
            font-weight: bold;
        }
    }
    & h5 {
        color: #ffffff;
        font-size: 15px;
        font-family: 'Poppins Semi Bold', sans-serif;
        font-weight: bold;
        letter-spacing: 4px;
    }

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${750 * multiplier}px;
        padding: 0 ${30 * multiplier}px;


        & h1 {
            font-size: ${85 * multiplier}px;
            letter-spacing: ${24 * multiplier}px;
            text-shadow: 0px 0px ${15 * multiplier}px rgba(0, 0, 0, 0.6);
            line-height: ${95 * multiplier}px;
        }
        & h2 {
            font-size: ${24 * multiplier}px;
            letter-spacing: ${7 * multiplier}px;
            & > b {};
        }
        & h3 {
            font-size: ${18 * multiplier}px;
            letter-spacing: ${5 * multiplier}px;
            & > b {};
        }
        & h4 {
            font-size: ${15 * multiplier}px;
            letter-spacing: ${4 * multiplier}px;
            & > b {};
        }
        & h5 {
            font-size: ${14 * multiplier}px;
            letter-spacing: ${4 * multiplier}px;
        }
    `,
    )}

    ${mediaQueryMobile(`
        & h1 {
            letter-spacing: 8px;
        }
    `)}
`

export const ExpertiseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 97vw;
    margin-left: auto;
    margin-right: auto;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin-top: ${50 * multiplier}px;
        width: ${1300 * multiplier}px;
    `,
    )}

    ${mediaQueryMobile(`
        flex-direction: column;
        gap: 30px;
        align-items: center;
    `)}
`

export const Title = styled.h1`
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins Semi Bold', sans-serif;
    font-weight: normal;
    margin: 0;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${46 * multiplier}px;
        letter-spacing: ${14 * multiplier}px;
    `,
    )}
    ${mediaQueryMobile(`
        letter-spacing: 3px;
    `)}
`

export const PlaceIcon = styled(Place)`
    position: absolute;
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        margin-left: ${-35 * multiplier}px;
        height: ${20 * multiplier}px;
        width: auto;
    `,
    )}
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 95vw;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${1200 * multiplier}px;
        gap: ${15 * multiplier}px;
        margin-top: ${50 * multiplier}px;
        border-radius: ${12 * multiplier}px;
    `,
    )}
    ${mediaQueryMobile(`
        width: 400px;
        max-width: 95vw;
        margin-left: auto;
        margin-right: auto;
    `)}
`

export const LowerProjectsContainer = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        gap: ${15 * multiplier}px;
    `,
    )}

    ${mediaQueryMobile(`
        flex-direction: column;
    `)}
`

export const GptProject = styled(Project)``

export const PortfolioProject = styled(Project)`
    flex: 1;
`

export const CoinProject = styled(Project)`
    flex: 1;
`

export const ExperienceContainer = styled.div`
    width: 97%;
    display: flex;
    justify-content: center;
`
