import React, { JSX } from 'react'
import { RootContainer } from './styles'
import { Spacer } from '../utility/Spacer'
import OnLoad from './OnLoad'

export interface PageContainerProps {
    children: JSX.Element[] | JSX.Element
    id?: string
}

function PageContainer({ children, id }: PageContainerProps): React.ReactElement {
    return (
        <RootContainer id={id}>
            {children}
            <Spacer />
            <OnLoad />
        </RootContainer>
    )
}

export default PageContainer
