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
import { MarginSpacer, Spacer } from '../../components/utility/Spacer'
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
                        <Spacer style={{ minWidth: 20 }} />
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
                        <Spacer style={{ minWidth: 20 }} />
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
                                            action: () => (window.location.href = 'https://www.youtube.com/watch?v=5bxGmh4ANnk'),
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
                                    <>
                                        <p>
                                            Primarily B2B bot mitigation and cybersecurity company powered by AI. Liaised directly with
                                            established renowned companies to secure contracts and implement integrations for specialised
                                            use cases
                                        </p>
                                        <ul>
                                            <li>
                                                Implemented JavaScript edge logic on more than 3 different CDN platforms (Cloudflare,
                                                Akamai, AWS Cloudfront) to reduce latency and cache database hits{' '}
                                            </li>
                                            <li>
                                                Architected, implemented and led a product integration from scratch for Akamai EdgeWorkers
                                                to provide compatibility with a customers preferred platform and secure a contract worth
                                                over $1,000,000{' '}
                                                <ul>
                                                    <li>
                                                        Profiled and optimised integration to respect the tight limitations of under 2.5MB
                                                        memory and 20ms CPU time set by Akamai EdgeWorkers{' '}
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Coordinated with 3 QA Engineers among the wider team of around 10-15 to ensure work was
                                                testable early in the SDLC{' '}
                                            </li>
                                            <li>
                                                Communicated and collaborated with clients (B2B) to fix and diagnose issues regarding setup
                                                and implementation of integrations on the platform{' '}
                                            </li>
                                            <li>
                                                Performed rigorous distributed load testing for the new Akamai integration ensuring the
                                                backend could handle over 100,000 additional RPS due to the new client
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>
                                                <em>Technologies</em>
                                            </strong>
                                            :<br />
                                            <strong>
                                                <em>Frontend</em>
                                            </strong>
                                            : TypeScript/JavaScript, Vue |{' '}
                                            <strong>
                                                <em>Backend</em>
                                            </strong>
                                            : TypeScript/JavaScript, Python, NodeJS, Flask, ElasticSearch, PostgreSQL |{' '}
                                            <strong>
                                                <em>DevOps &amp; Cloud</em>
                                            </strong>
                                            : AWS, Cloudflare, Akamai, Docker
                                        </p>
                                    </>
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
                                    <>
                                        <p>
                                            Conducted amongst a diverse, talented development team of 10 (amongst other teams) in the KYC
                                            sector. Acquired by Moody’s Analytics during incumbency. Embarked on major projects to meet
                                            acquisition demands
                                        </p>
                                        <ul>
                                            <li>
                                                Led a project from beginning to end to fully isolate integration tests in the largest
                                                producing:{' '}
                                                <ul>
                                                    <li>
                                                        Approximately a 30% reduction in re-run tests (simultaneous tests would
                                                        collide){' '}
                                                    </li>
                                                    <li>Around 50% increased integration test speeds due to additional parallelism </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Practised Test Driven Development to enforce robust code and maintain 80% test code
                                                coverage{' '}
                                            </li>
                                            <li>
                                                Migrated an old configuration system to a new graph (DAG) based versioned system in Rust
                                                which supports more than 1 simultaneous users &amp; provides more complete validation{' '}
                                                <ul>
                                                    <li>
                                                        Led to a drastic reduction in customer issues related to copying configuration
                                                        across different environments{' '}
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Modernized configuration service&#39;s frontend, improving code maintainability and user
                                                experience{' '}
                                            </li>
                                            <li>
                                                Monitored system services through Grafana, Loki, Retool, and Datadog. Rapidly resolved and
                                                deployed fixes to critical issues and vulnerabilities to ensure over 99.9% system
                                                uptime{' '}
                                            </li>
                                            <li>
                                                Directed core ceremonies such as standup, retrospectives, post-incident meetings, support
                                                handover, and new feature showcases
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>
                                                <em>Technologies</em>
                                            </strong>
                                            :<br />
                                            <strong>
                                                <em>Frontend</em>
                                            </strong>
                                            : TypeScript/JavaScript, React |{' '}
                                            <strong>
                                                <em>Backend</em>
                                            </strong>
                                            : Python, Rust, NodeJS, Flask, PostgreSQL, MySQL, ElasticSearch |{' '}
                                            <strong>
                                                <em>DevOps &amp; Cloud</em>
                                            </strong>
                                            : AWS, GCP, Azure, Docker, Kubernetes
                                        </p>
                                    </>
                                ),
                            },
                            {
                                title: 'RoEx',
                                subtitle: '[AI MUSIC STARTUP] - FULL STACK SOFTWARE ENGINEER',
                                uses: ['javascript', 'typescript', 'react', 'python', 'nodejs', 'datastore', 'gcp', 'docker'],
                                startDate: 'April 2024',
                                endDate: 'January 2025',
                                description: (
                                    <>
                                        <p>
                                            Part of a small development team for a budding new music AI startup. B2C revenue grew by over
                                            200% during tenure
                                        </p>
                                        <ul>
                                            <li>
                                                Engineered a Cypress-based automated integration test suite, resulting in a 40% reduction in
                                                critical platform errors and a 25% faster release cycle{' '}
                                            </li>
                                            <li>
                                                Investigated and resolved escalated customer-reported software bugs and platform issues
                                                weekly, achieving a 95% satisfaction rating and directly improving the user experience{' '}
                                            </li>
                                            <li>
                                                Interviewed and directly corresponded with customers to obtain insightful feedback and steer
                                                future initiatives{' '}
                                            </li>
                                            <li>
                                                Refactored and optimised key components of the site to enhance responsiveness and ensure
                                                seamless mobile compatibility using best practices{' '}
                                            </li>
                                            <li>
                                                Took initiative in traditionally distinct roles such as UI/UX and marketing strategy as a
                                                result of smaller team size (8 people){' '}
                                            </li>
                                            <li>
                                                Revamped the architecture of a critical legacy system, refactoring core components to be
                                                modular and implementing modern design patterns
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>
                                                <em>Technologies</em>
                                            </strong>
                                            :<br />
                                            <strong>
                                                <em>Frontend</em>
                                            </strong>
                                            : TypeScript/JavaScript, React |{' '}
                                            <strong>
                                                <em>Backend</em>
                                            </strong>
                                            : TypeScript/JavaScript, Python, Flask, NodeJS, Google Datastore (NoSQL) |{' '}
                                            <strong>
                                                <em>DevOps &amp; Cloud</em>
                                            </strong>
                                            : Google Cloud Platform, Docker
                                        </p>
                                    </>
                                ),
                            },
                        ]}
                    />
                </ExperienceContainer>
                <MarginSpacer size={80} />
                <ScrollAnimation animateOnce animateIn="fadeInTop">
                    <Title id="contact" data-test-id="contact-title">
                        CONTACT
                    </Title>
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
