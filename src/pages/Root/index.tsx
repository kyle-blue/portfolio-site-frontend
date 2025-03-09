import React from 'react'
import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/Navbar'
import {
    ExpertiseContainer,
    HomeHeadingContainer,
    HomeImage,
    LastUpdatedText,
    OverBackground,
    PlaceIcon,
    RootContainer,
    Title,
    UnderBackground,
} from './styles'
import config from '../../config'
import ExpertiseColumn from '../../components/ExpertiseColumn'
import { MarginSpacer } from '../../components/utility/Spacer'
import { Place } from '@mui/icons-material'

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
                    <h5>
                        <PlaceIcon /> LONDON, UK
                    </h5>
                </HomeHeadingContainer>

                <MarginSpacer size={200} />
                <Title>EXPERTISE</Title>
                <ExpertiseContainer>
                    <ExpertiseColumn
                        title={'FRONTEND'}
                        subtitle={'Experience making responsive webpages for desktop & mobile.'}
                        rows={[
                            {
                                icons: ['javascript', 'typescript'],
                                text: 'JAVASCRIPT / TYPESCRIPT',
                            },
                            {
                                icons: ['html5', 'css3'],
                                text: 'HTML / CSS',
                            },
                            {
                                icons: ['react'],
                                text: 'REACT / REACT NATIVE',
                            },
                        ]}
                    />
                    <ExpertiseColumn
                        title={'BACKEND'}
                        subtitle={'Experience making performant and secure REST API’s.'}
                        rows={[
                            {
                                icons: ['nodejs', 'javascript', 'typescript'],
                                text: 'NODE.JS / JAVASCRIPT / TYPESCRIPT',
                            },
                            {
                                icons: ['rust', 'python'],
                                text: 'RUST    PYTHON',
                            },
                            {
                                icons: ['postgres', 'mysql'],
                                text: 'SQL - POSTGRES / MYSQL',
                            },
                            {
                                icons: ['mongodb', 'elasticsearch'],
                                text: 'NOSQL - MONGODB / ELASTICSEARCH',
                            },
                        ]}
                    />
                    <ExpertiseColumn
                        title={'DEVOPS'}
                        subtitle={'Experience creating and managing scalable cloud services.'}
                        rows={[
                            {
                                icons: ['docker', 'kubernetes', 'helm'],
                                text: 'DOCKER / KUBERNETES (K8S) / HELM',
                            },
                            {
                                icons: ['aws', 'gcp'],
                                text: 'AWS / GOOGLE CLOUD PLATFORM (GCP)',
                            },
                            {
                                icons: ['github', 'circleci'],
                                text: 'GITHUB ACTIONS / CIRCLECI',
                            },
                        ]}
                    />
                </ExpertiseContainer>
            </RootContainer>
        </PageContainer>
    )
}
