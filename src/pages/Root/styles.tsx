import styled from '@emotion/styled'
import homeBackground from '../../assets/images/home-background.png'
import { Place } from '@mui/icons-material'
import Project from '../../components/Project'

export const RootContainer = styled.main`
    position: relative;
    height: fit-content;
    overflow: hidden;
    width: 100%;
    /* background: rgba(52, 43, 55, 0.6); */
    background: linear-gradient(180deg, rgba(37, 197, 130, 0.2) -10%, rgba(210, 182, 236, 0.3) 110%);
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UnderBackground = styled.div`
    position: fixed;
    // TODO: when mobilising get this to work for all screen sizes
    height: 1200px;
    width: 100%;
    background: rgb(121, 173, 157);
    background: linear-gradient(180deg, #a3659b 0%, #997cbe 100%);
    z-index: -4;
`

const HomeImageOuter = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    overflow: visible;
    animation-duration: 1s;
`
const HomeImageInner = styled.div`
    width: 100%;
    position: absolute;
    top: -80px;
    opacity: 0.7;
    z-index: -2;
    background: url(${homeBackground});
    background-repeat: no-repeat;
    background-size: 100% auto;
    // TODO: when mobilising get this to work for all screen sizes
    height: 1080px;
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
    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);

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
`

export const ExpertiseContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
`

export const Title = styled.h1<{ isShadow?: boolean }>`
    text-align: center;
    color: #ffffff;
    font-size: 46px;
    font-family: 'Poppins Semi Bold', sans-serif;
    font-weight: normal;
    letter-spacing: 14px;
    text-shadow: ${({ isShadow }) => (isShadow ? '0px 0px 15px rgba(0, 0, 0, 0.8)' : 'none')};
    margin: 0;
`

export const PlaceIcon = styled(Place)`
    position: absolute;
    margin-left: -40px;
`

export const ProjectsContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 15px;
    box-sizing: border-box;
    margin-top: 50px;
    border-radius: 12px;
    overflow: hidden;
`

export const LowerProjectsContainer = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    gap: 15px;
`

export const GptProject = styled(Project)``

export const PortfolioProject = styled(Project)`
    flex: 1;
`

export const CoinProject = styled(Project)`
    flex: 1;
`

export const ExperienceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
