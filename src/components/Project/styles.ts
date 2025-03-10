import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material'

export const MainContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    display: flex;

    overflow: hidden;
    position: relative;
    justify-content: center;
    align-items: center;
`
export const InnerContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    overflow: hidden;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
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

    transition: 0.3s ease;
`

export const UpperContainer = styled.div<{ layout: 'wide' | 'tall' }>`
    display: flex;
    gap: 20px;
    align-items: center;
    vertical-align: middle;
    min-height: fit-content;
    flex-direction: ${({ layout }) => (layout === 'wide' ? 'row' : 'column')};
    margin-bottom: ${({ layout }) => (layout === 'wide' ? '75px' : '35px')};
`
export const LowerContainer = styled.div<{ layout: 'wide' | 'tall' }>`
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: ${({ layout }) => (layout === 'wide' ? 'row' : 'column')};
    gap: 15px;
`

export const Title = styled.h1`
    margin: 0;
    color: #ffffff;
    font-size: 28px;
    font-family: 'Poppins Bold', sans-serif;
    font-weight: normal;
    letter-spacing: 6px;
    flex: 1;
`

export const Description = styled.p`
    word-wrap: normal;
    min-height: fit-content;
    overflow: hidden;

    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    margin: 0;
    flex: 1;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
`

export const Button = styled(MuiButton)``
