import React, { JSX } from 'react'
import { RootContainer } from './styles'
import { Spacer } from '../utility/Spacer'
import OnLoad from './OnLoad'

export interface PageContainerProps {
    children: JSX.Element[] | JSX.Element
}

function PageContainer({ children }: PageContainerProps): React.ReactElement {
    return (
        <RootContainer>
            {children}
            <Spacer />
            <OnLoad />
        </RootContainer>
    )
}

export default PageContainer
