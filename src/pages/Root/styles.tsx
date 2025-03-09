import styled from '@emotion/styled'
import { palette } from '../../theme'
import homeBackground from '../../assets/images/home-background.png'
import { Place } from '@mui/icons-material'

export const RootContainer = styled.main`
    position: relative;
    height: 5000px;
    overflow: hidden;
    width: 100%;
    background: rgba(52, 43, 55, 0.6);
    background: linear-gradient(180deg, rgba(52, 43, 55, 0.63) -10%, rgba(175, 142, 235, 0.6) 110%);
    z-index: -3;
`

export const UnderBackground = styled.div`
    position: fixed;
    // TODO: when mobilising get this to work for all screen sizes
    height: 1200px;
    width: 100%;
    background: rgb(121, 173, 157);
    background: linear-gradient(180deg, rgba(52, 43, 55, 1) 0%, rgba(121, 173, 157, 1) 100%);
    z-index: -4;
`

export const OverBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #fff4caff -20%, #9f9f9f00 40%, #9f9f9f00 60%, #fff4caff 120%);
    opacity: 0.15;
    top: 0;
    z-index: -1;
`

export const LastUpdatedText = styled.p`
    font-family: 'Poppins Thin', sans-serif;
    letter-spacing: 5px;
    color: ${palette.offWhite};
    font-weight: bold;
    font-size: 13px;
    position: absolute;
    left: 20px;
    top: 10px;
`

const HomeImageOuter = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    overflow: visible;
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

export const HomeImage = () => (
    <HomeImageOuter>
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

    & > h1 {
        color: #ffffff;
        font-size: 85px;
        font-family: 'Poppins Semi Bold', sans-serif;
        font-weight: normal;
        letter-spacing: 24px;
        line-height: 95px;
        margin: 0;
    }
    & > h2 {
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
    & > h3 {
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

    & > h4 {
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
    & > h5 {
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

export const Title = styled.h1`
    text-align: center;
    color: #ffffff;
    font-size: 46px;
    font-family: 'Poppins Semi Bold', sans-serif;
    font-weight: normal;
    letter-spacing: 14px;
    line-height: 95px;
    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
    margin: 0;
`

export const PlaceIcon = styled(Place)`
    position: absolute;
    margin-left: -40px;
`
