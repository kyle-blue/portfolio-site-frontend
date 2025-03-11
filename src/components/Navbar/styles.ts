import styled from '@emotion/styled'
import { palette } from '../../theme'

export const Title = styled.h3`
    font-family: 'Poppins Thin', sans-serif;
    font-size: 20px;
    color: ${palette.white};
    text-align: center;
    font-weight: bold;
    display: block;
    padding: 2px 0;
    width: fit-content;
    text-align: center;
    cursor: pointer;

    /** Underline animation **/
    background-image: linear-gradient(rgba(255, 255, 255, 0.5) 0 0);
    background-position: 0 100%;
    background-size: 0% 1px;
    background-repeat: no-repeat;
    transition: background-size 0.3s;

    &:hover {
        background-size: 100% 1px;
    }
    /** --- */
`

export const MainContainer = styled.div`
    height: 80px;
    display: flex;
    position: relative;
    z-index: 3;
`

export const TitleContainer = styled.div`
    flex: 1;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
