import React, { JSX } from 'react'
import { MainContainer, Title, TitleContainer } from './styles'
import { CenterHorizontalFlex } from '../utility/CenterFlex'

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
                    <TitleContainer>
                        <Title onClick={action}>{title}</Title>
                    </TitleContainer>
                ))}
            </MainContainer>
        </CenterHorizontalFlex>
    )
}
