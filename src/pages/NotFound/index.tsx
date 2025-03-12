import React from 'react'
import { Button, MainContainer, NotFoundSvg, Subtitle, Title } from './styles'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../Routes'

export default function NotFound(): React.ReactElement {
    const navigate = useNavigate()

    return (
        <MainContainer>
            <Button onClick={() => navigate(Paths.ROOT)}>RETURN TO HOME</Button>

            <NotFoundSvg />
            <Title>PAGE NOT FOUND</Title>
            <Subtitle>Please check the url is correct or return home.</Subtitle>
        </MainContainer>
    )
}
