import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/Navbar'
import { HomeHeadingContainer, HomeImage, LastUpdatedText, OverBackground, RootContainer, UnderBackground } from './styles'
import config from '../../config'

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Root(props: Props) {
    return (
        <PageContainer>
            <LastUpdatedText>LAST UPDATED {config.lastUpdated}</LastUpdatedText>
            <UnderBackground />
            <RootContainer>
                <Navbar
                    elements={[
                        { title: 'home', action: () => {} },
                        { title: 'expertise', action: () => {} },
                        { title: 'projects', action: () => {} },
                        { title: 'experience', action: () => {} },
                        { title: 'contact', action: () => {} },
                    ]}
                />
                <OverBackground />
                <HomeImage />

                <HomeHeadingContainer>
                    <h1>
                        KYLE
                        <br />
                        DOIDGE
                    </h1>
                    <h2>
                        <b>FULL STACK</b> SOFTWARE ENGINEER
                    </h2>
                    <h3>
                        WITH <b>3 YEARS</b> OF INDUSTRY EXPERIENCE
                    </h3>
                    <h4>
                        AND <b>9 YEARS</b> OF PERSONAL EXPERIENCE
                    </h4>
                    <h5>UK, LONDON</h5>
                </HomeHeadingContainer>
            </RootContainer>
        </PageContainer>
    )
}
