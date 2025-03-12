import React from 'react'
import { Spacer } from '../utility/Spacer'
import { Title, Description, MainContainer, UpperContainer, LowerContainer, ButtonsContainer, Background, InnerContainer } from './styles'
import IconsBox from '../IconsBox'
import Button from '../Button'

interface iButton {
    text: string
    action: () => void
}

interface Props {
    title: string
    description: string
    uses: string[]
    layout: 'wide' | 'tall'
    buttons: iButton[]
    backgroundImage?: string
    className?: string
}

export default function Project({ title, description, uses, layout, buttons, className, backgroundImage }: Props): React.ReactElement {
    return (
        <MainContainer className={className}>
            <Background backgroundImage={backgroundImage} />
            <InnerContainer>
                <UpperContainer layout={layout}>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </UpperContainer>
                <LowerContainer layout={layout}>
                    <IconsBox icons={uses} />
                    <Spacer />
                    <ButtonsContainer>
                        {buttons.map(({ text, action }) => (
                            <Button key={text} onClick={action} variant="outlined">
                                {text}
                            </Button>
                        ))}
                    </ButtonsContainer>
                </LowerContainer>
            </InnerContainer>
        </MainContainer>
    )
}
