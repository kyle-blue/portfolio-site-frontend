import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/Navbar'
import {
    CoinProject,
    ExpertiseContainer,
    GptProject,
    HomeHeadingContainer,
    HomeImage,
    LastUpdatedText,
    LowerProjectsContainer,
    OverBackground,
    PlaceIcon,
    PortfolioProject,
    ProjectsContainer,
    RootContainer,
    Title,
    UnderBackground,
} from './styles'
import config from '../../config'
import ExpertiseColumn from '../../components/ExpertiseColumn'
import { MarginSpacer } from '../../components/utility/Spacer'
import gptOverlay from '../../assets/images/gpt-overlay.png'
import coinOverlay from '../../assets/images/coin-overlay.png'
import portfolioOverlay from '../../assets/images/portfolio-overlay.png'

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
                <Title isShadow>EXPERTISE</Title>
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

                <MarginSpacer size={200} />
                <Title>RECENT PROJECTS</Title>
                <ProjectsContainer>
                    <GptProject
                        title={'MINI GPT'}
                        description={'Simple GPT chatbot with approximately 10 million parameters, trained on the Common Crawl dataset.'}
                        uses={['python', 'nodejs', 'react', 'postgres']}
                        layout={'wide'}
                        backgroundImage={gptOverlay}
                        buttons={[
                            {
                                text: 'VIDEO',
                                action: () => {},
                            },
                            {
                                text: 'GITHUB',
                                action: () => {},
                            },
                            {
                                text: 'GO TO SITE',
                                action: () => {},
                            },
                        ]}
                    />
                    <LowerProjectsContainer>
                        <PortfolioProject
                            title={'PORTFOLIO SITE'}
                            description={
                                '(This !) - Responsive, mobile friendly React portfolio site with rust tcp http backend (made from scratch as a showcase) and scalable k8s archetecture.'
                            }
                            uses={['rust', 'react', 'kubernetes', 'docker', 'helm']}
                            layout={'tall'}
                            backgroundImage={portfolioOverlay}
                            buttons={[
                                {
                                    text: 'VIDEO',
                                    action: () => {},
                                },
                                {
                                    text: 'GITHUB',
                                    action: () => {},
                                },
                            ]}
                        />
                        <CoinProject
                            title={'MINI COIN'}
                            description={'Experimental cryptocurrency minted on the Etherium (ERC-20) network that uses proof-of-stake.'}
                            uses={['python', 'nodejs', 'react', 'postgres']}
                            layout={'tall'}
                            backgroundImage={coinOverlay}
                            buttons={[
                                {
                                    text: 'VIDEO',
                                    action: () => {},
                                },
                                {
                                    text: 'GITHUB',
                                    action: () => {},
                                },
                                {
                                    text: 'BLOCKCHAIN',
                                    action: () => {},
                                },
                            ]}
                        />
                    </LowerProjectsContainer>
                </ProjectsContainer>
            </RootContainer>
        </PageContainer>
    )
}
