import PageContainer from '../../components/PageContainer'
import Navbar from '../../components/Navbar'
import {
    CoinProject,
    ExperienceContainer,
    ExpertiseContainer,
    GptProject,
    HomeHeadingContainer,
    HomeImage,
    LowerProjectsContainer,
    PlaceIcon,
    PortfolioProject,
    ProjectsContainer,
    RootContainer,
    Title,
    UnderBackground,
} from './styles'
import ExpertiseColumn from '../../components/ExpertiseColumn'
import { MarginSpacer } from '../../components/utility/Spacer'
import gptOverlay from '../../assets/images/gpt-overlay.png'
import coinOverlay from '../../assets/images/coin-overlay.png'
import portfolioOverlay from '../../assets/images/portfolio-overlay.png'
import Experience from '../../components/Experience'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../Routes'
import ScrollAnimation from 'react-animate-on-scroll'
import { isMobile as isMobileFunc } from '../../utils/mobile'
import { useScreenWidth } from '../../hooks/mobile'
import ContactForm from './ContactForm'
interface Props {}

function scrollToId(id: string) {
    let element = document.getElementById(id)

    if (element) {
        const yOffset = -50
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}

export default function Root({}: Props) {
    const navigate = useNavigate()
    const screenWidth = useScreenWidth()
    const isMobile = isMobileFunc(screenWidth)

    return (
        <PageContainer>
            <UnderBackground />
            <RootContainer>
                <Navbar
                    elements={[
                        { title: 'home', action: () => scrollToId('home') },
                        { title: 'expertise', action: () => scrollToId('expertise') },
                        { title: 'projects', action: () => scrollToId('projects') },
                        { title: 'experience', action: () => scrollToId('experience') },
                        { title: 'contact', action: () => scrollToId('contact') },
                    ]}
                />
                <HomeImage />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <HomeHeadingContainer id="home">
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
                </ScrollAnimation>

                <MarginSpacer size={100} />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <Title id="expertise">EXPERTISE</Title>
                </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn="fadeInTop">
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
                </ScrollAnimation>
                <MarginSpacer size={80} />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <Title id="projects">RECENT PROJECTS</Title>
                </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <ProjectsContainer>
                        <GptProject
                            title={'MINI GPT - [IN PROGRESS]'}
                            description={'Simple GPT chatbot trained on the Common Crawl dataset.'}
                            uses={['python', 'nodejs', 'react', 'postgres']}
                            layout={isMobile ? 'tall' : 'wide'}
                            backgroundImage={gptOverlay}
                            buttons={[
                                {
                                    text: 'VIDEO',
                                    action: () => navigate(Paths.IN_PROGRESS),
                                },
                                {
                                    text: 'GITHUB',
                                    action: () => navigate(Paths.IN_PROGRESS),
                                },
                                {
                                    text: 'GO TO SITE',
                                    action: () => navigate(Paths.IN_PROGRESS),
                                },
                            ]}
                        />
                        <ScrollAnimation animateOnce animateIn="fadeInTop">
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
                                            action: () => navigate(Paths.IN_PROGRESS),
                                        },
                                        {
                                            text: 'GITHUB',
                                            action: () =>
                                                (window.location.href = 'https://github.com/kyle-blue/portfolio-site-infrastructure'),
                                        },
                                    ]}
                                />
                                <CoinProject
                                    title={'MINI COIN - [IN PROGRESS]'}
                                    description={
                                        'Experimental cryptocurrency minted on the Etherium (ERC-20) network that uses proof-of-stake.'
                                    }
                                    uses={['python', 'nodejs', 'react', 'postgres']}
                                    layout={'tall'}
                                    backgroundImage={coinOverlay}
                                    buttons={[
                                        {
                                            text: 'VIDEO',
                                            action: () => navigate(Paths.IN_PROGRESS),
                                        },
                                        {
                                            text: 'GITHUB',
                                            action: () => navigate(Paths.IN_PROGRESS),
                                        },
                                        {
                                            text: 'BLOCKCHAIN',
                                            action: () => navigate(Paths.IN_PROGRESS),
                                        },
                                    ]}
                                />
                            </LowerProjectsContainer>
                        </ScrollAnimation>
                    </ProjectsContainer>
                </ScrollAnimation>

                <MarginSpacer size={80} />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <Title id="experience">
                        PROFESSIONAL
                        <br />
                        EXPERIENCE
                    </Title>
                </ScrollAnimation>
                <MarginSpacer size={30} />
                <ExperienceContainer>
                    <Experience
                        jobs={[
                            {
                                title: 'NETACEA',
                                subtitle: '[BOT MITIGATION] - FULL STACK SOFTWARE ENGINEER',
                                uses: ['javascript', 'typescript', 'vue', 'nodejs', 'python', 'postgres', 'aws', 'docker'],
                                startDate: 'July 2021',
                                endDate: 'June 2022',
                                description: (
                                    <ul>
                                        <li>
                                            Implemented JavaScript edge logic on more than 3 different CDN platforms (Cloudflare, Akamai,
                                            AWS Cloudfront) to reduce latency and cache database hits
                                        </li>
                                        <li>
                                            Architected, implemented and led a project (a product integration) from scratch on Akamai
                                            platform in JavaScript/Typescript to provide compatibility with a customers preferred platform
                                            and secure a contract worth over $1,000,000
                                            <ul>
                                                <li>
                                                    Profiled and optimised integration to respect the tight limitations of under 2.5MB
                                                    memory and 20ms CPU time set by Akamai EdgeWorkers
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Coordinated with 3 QA Engineers among the wider team of around 10-15 to ensure work was testable
                                            early in the SDLC
                                        </li>
                                        <li>
                                            Communicated and operated closely and with clients (B2B) to fix and diagnose issues regarding
                                            setup and implementation of integrations on the platform
                                        </li>
                                        <li>
                                            Performed rigorous distributed load testing for the new Akamai integration ensuring the backend
                                            could handle over additional 300,000 RPS due to the new client
                                        </li>
                                    </ul>
                                ),
                            },
                            {
                                title: 'PASSFORT (MOODYS)',
                                subtitle: '[KYC] - FULL STACK SOFTWARE ENGINEER',
                                uses: [
                                    'javascript',
                                    'typescript',
                                    'react',
                                    'rust',
                                    'python',
                                    'nodejs',
                                    'postgres',
                                    'mysql',
                                    'elasticsearch',
                                    'aws',
                                    'gcp',
                                    'docker',
                                    'kubernetes',
                                ],
                                startDate: 'August 2022',
                                endDate: 'December 2023',
                                description: (
                                    <ul>
                                        <li>
                                            Led a project from beginning to end to fully isolate integration tests in the largest service
                                            and improve the deployment pipeline modifying Rust Microservices, HashiCorp Vault secrets, the
                                            Python Flask backend monolith, and NodeJS TypeScript script code in the process. This produced:
                                            <ul>
                                                <li>
                                                    Approximately a 30% reduction in re-run tests and thus CircleCI credit cost
                                                    (simultaneous tests would collide with one other)
                                                </li>
                                                <li>
                                                    The capability of allowing more than 1 test suite to execute simultaneously mitigating
                                                    the deployment pipeline traffic
                                                </li>
                                                <li>Around 50% increased integration test speeds due to additional parallelism</li>
                                                <li>A general increase in team throughput by removing a bottleneck in our workflow</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Practised Test Driven Development principles to ensure code quality and avoid tech debt build up
                                        </li>
                                        <li>
                                            Migrated an old configuration system to a new graph based configuration system in Rust which
                                            allows for configuration versioning, supports more than 1 simultaneous users, and provides more
                                            complete validation causing:
                                            <ul>
                                                <li>
                                                    A drastic reduction in customer issues related to copying configuration across different
                                                    environments
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Completely revamped the frontend in React for configuration
                                            <ul>
                                                <li>
                                                    Worked closely with UI/UX to ensure the new frontend was intuitive and met end-user
                                                    requirements
                                                </li>
                                                <li>
                                                    Caused a notable reduction in support tickets that were non-issues, reducing developer
                                                    context switching
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Hosted refinement, retrospectives, and other team (or scrum related) ceremonies for a team of
                                            5-10 people, and presented new changes at all-hands in front of an audience of over 50 people
                                        </li>
                                        <li>
                                            Increased technical documentation coverage for over 5 different major services to reduce
                                            knowledge silos
                                        </li>
                                        <li>
                                            Investigated, triaged, fixed and resolved customer issues for over 20 services in a timely
                                            fashion
                                        </li>
                                        <li>
                                            Monitored system services through Grafana, Loki, Retool, and Datadog. Rapidly deployed fixes to
                                            critical issues and vulnerabilities
                                        </li>
                                    </ul>
                                ),
                            },
                            {
                                title: 'RoEx',
                                subtitle: '[AI MUSIC STARTUP] - FULL STACK SOFTWARE ENGINEER',
                                uses: ['javascript', 'typescript', 'react', 'python', 'nodejs', 'datastore', 'gcp', 'docker'],
                                startDate: 'April 2024',
                                endDate: 'January 2025',
                                description: (
                                    <ul>
                                        <li>Introduced automated integration test suite to combat the platform instability</li>
                                        <li>Worked directly with customers to promptly solve support issues</li>
                                        <li>Recreate many portions of the site to be reactive and mobile friendly</li>
                                        <li>
                                            Made regular contributions to external roles such as UI/UX and marketing as a result of smaller
                                            team size
                                        </li>
                                        <li>Modularised, simplified, optimised and future proofed old legacy code</li>
                                    </ul>
                                ),
                            },
                        ]}
                    />
                </ExperienceContainer>
                <MarginSpacer size={80} />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <Title id="contact">CONTACT</Title>
                </ScrollAnimation>
                <MarginSpacer size={30} />
                <ScrollAnimation
                    animateOnce
                    animateIn="fadeInTop"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                    <ContactForm />
                </ScrollAnimation>
                <MarginSpacer size={80} />
                <Footer />
            </RootContainer>
        </PageContainer>
    )
}
