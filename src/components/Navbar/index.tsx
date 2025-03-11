import React, { JSX } from 'react'
import { MainContainer, Title, TitleContainer } from './styles'
import { CenterHorizontalFlex } from '../utility/CenterFlex'
import { Button, ButtonBase } from '@mui/material'

interface NavigationElement {
    title: JSX.Element | string
    action: React.MouseEventHandler<HTMLHeadingElement>
}

interface Props {
    elements: NavigationElement[]
}

export default function Navbar({ elements }: Props): React.ReactElement {
    return (
        <CenterHorizontalFlex style={{ height: 'auto' }}>
            <MainContainer>
                {elements.map(({ title, action }) => (
                    <div onClick={action}>
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
