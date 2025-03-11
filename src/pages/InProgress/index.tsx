import React from 'react'
import { Button, MainContainer, ConstructionSvg, Subtitle, Title } from './styles'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../Routes'

export default function InProgress(): React.ReactElement {
    const navigate = useNavigate()

    return (
        <MainContainer>
            <Button onClick={() => navigate(Paths.ROOT)}>RETURN TO HOME</Button>

            <ConstructionSvg />
            <Title>PROJECT IN PROGRESS</Title>
            <Subtitle>Check back here later...</Subtitle>
        </MainContainer>
    )
}
