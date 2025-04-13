import styled from '@emotion/styled'
import { palette } from '../../theme'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'
import { IconButton } from '@mui/material'
import HamburgerIcon from 'hamburger-react'

export const Title = styled.h3`
    font-family: 'Poppins Thin', sans-serif;
    color: ${palette.white};
    text-align: center;
    font-weight: bold;
    display: block;
    width: fit-content;
    text-align: center;
    cursor: pointer;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${20 * multiplier}px;    
        padding: ${2 * multiplier}px 0;    
    `,
    )}

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

export const MainContainer = styled.div<{ flexDirection: string }>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    position: relative;
    z-index: 3;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        height: ${80 * multiplier}px;    
    `,
    )}
`

export const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${200 * multiplier}px;    
    `,
    )}
`

export const MenuItem = styled.div`
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

export const MenuContainer = styled.div<{ isMenuOpen: boolean }>`
    ${({ isMenuOpen }) => (isMenuOpen ? 'transform: translateY(0%)' : 'transform: translateY(-100%)')};
    transition: 300ms ease-in-out;
    background: #2b2233;
`

export const TitleMobile = styled.h3`
    font-family: 'Poppins Light', sans-serif;
    color: ${palette.white};
    text-align: center;
    font-weight: lighter;
    display: block;
    width: fit-content;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

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
export const TitleContainerMobile = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${200 * multiplier}px;    
    `,
    )}
`

export const HamburgerContainer = styled(IconButton)`
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 5;
`
export const Hamburger = styled(HamburgerIcon)``
