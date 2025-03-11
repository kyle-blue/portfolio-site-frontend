import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material'
import Construction from '../../assets/svg/construction.svg'

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgb(138, 121, 173);
    background: linear-gradient(180deg, rgba(138, 121, 173, 1) 0%, rgba(174, 130, 181, 1) 100%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Button = styled(MuiButton)`
    position: absolute;
    top: 0;
    left: 0;

    margin: 30px;
`

export const Title = styled.h1`
    font-family: 'Poppins Semi Bold', sans-serif;
    text-align: center;
    font-size: 30px;
    color: #ffffff;
`

export const Subtitle = styled.h1`
    font-family: 'Poppins Light', sans-serif;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    width: 500px;
    overflow: hidden;
`

export const ConstructionSvg = styled(Construction as any)`
    margin-bottom: 20px;
    width: 400px;
`
