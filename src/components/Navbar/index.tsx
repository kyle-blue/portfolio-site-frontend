import React, { JSX, useRef, useState } from 'react'
import {
    Hamburger,
    HamburgerContainer,
    MainContainer,
    MenuContainer,
    MenuItem,
    Title,
    TitleContainer,
    TitleContainerMobile,
    TitleMobile,
} from './styles'
import { CenterHorizontalFlex } from '../utility/CenterFlex'
import { ButtonBase } from '@mui/material'
import { isMobile as isMobileFunc } from '../../utils/mobile'
import { useScreenWidth } from '../../hooks/mobile'
import { useOnClickOutside } from '../../hooks/onClickOutside'

interface NavigationElement {
    title: JSX.Element | string
    action: React.MouseEventHandler<HTMLHeadingElement>
}

interface Props {
    elements: NavigationElement[]
}

export default function Navbar({ elements }: Props): React.ReactElement {
    const screenWidth = useScreenWidth()
    const isMobile = isMobileFunc(screenWidth)
    const menuRef = useRef(null)
    const hamburgerRef = useRef(null)
    useOnClickOutside([menuRef, hamburgerRef], () => {
        setIsMenuOpen(false)
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    if (isMobile) {
        return (
            <>
                <CenterHorizontalFlex style={{ height: 'auto' }}>
                    <MainContainer flexDirection={'column'}>
                        <MenuContainer isMenuOpen={isMenuOpen} ref={menuRef}>
                            {elements.map(({ title, action }) => (
                                <MenuItem
                                    key={title.toString()}
                                    onClick={(e) => {
                                        setIsMenuOpen(false)
                                        action(e)
                                    }}
                                >
                                    <ButtonBase style={{ color: 'rgba(255, 255, 255, 0.363)', width: '100%' }}>
                                        <TitleContainerMobile>
                                            <TitleMobile>{title}</TitleMobile>
                                        </TitleContainerMobile>
                                    </ButtonBase>
                                </MenuItem>
                            ))}
                        </MenuContainer>
                    </MainContainer>
                </CenterHorizontalFlex>
                <HamburgerContainer
                    ref={hamburgerRef}
                    onClick={(e) => {
                        setIsMenuOpen(!isMenuOpen)
                        e.stopPropagation()
                    }}
                >
                    <Hamburger toggled={isMenuOpen} onToggle={(val) => setIsMenuOpen(val)} color="#ffffff" size={25} />
                </HamburgerContainer>
            </>
        )
    }

    return (
        <CenterHorizontalFlex style={{ height: 'auto' }}>
            <MainContainer flexDirection={'row'}>
                {elements.map(({ title, action }) => (
                    <div onClick={action} key={title.toString()}>
                        <ButtonBase style={{ color: 'rgba(255, 255, 255, 0.2)' }}>
                            <TitleContainer>
                                <Title>{title}</Title>
                            </TitleContainer>
                        </ButtonBase>
                    </div>
                ))}
            </MainContainer>
        </CenterHorizontalFlex>
    )
}
