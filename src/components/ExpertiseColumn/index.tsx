import React from 'react'
import { AllRowsContainer, IconsContainer, MainContainer, RowContainer, RowText, Subtitle, Title } from './styles'
import AssetIcon from '../AssetIcon'

interface Row {
    icons: string[]
    text: string
}

interface Props {
    title: string
    subtitle: string
    rows: Row[]
}

export default function ExpertiseColumn({ title, subtitle, rows }: Props): React.ReactElement {
    return (
        <MainContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <AllRowsContainer>
                {rows.map(({ icons, text }) => (
                    <RowContainer key={text}>
                        <IconsContainer>
                            {icons.map((name) => (
                                <AssetIcon key={name} name={name} size={32} />
                            ))}
                        </IconsContainer>
                        <RowText>{text}</RowText>
                    </RowContainer>
                ))}
            </AllRowsContainer>
        </MainContainer>
    )
}
