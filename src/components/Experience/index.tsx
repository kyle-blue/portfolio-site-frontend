import React, { useMemo } from 'react'
import {
    MainContainer,
    JobBox,
    HorizontalLine,
    DateContainer,
    VerticalLineContainer,
    VerticalLine,
    CircleContainer,
    Circle,
    Title,
    Subtitle,
    Description,
    DescriptionContainer,
    InnerModalContainer,
    ModalSubtitle,
    ModalDate,
} from './styles'
import IconsBox from '../IconsBox'
import { Spacer } from '../utility/Spacer'
import { useScreenWidth } from '../../hooks/mobile'
import { getCurrentScreenMultiplier } from '../../utils/mobile'
import { isMobile as isMobileFunc } from '../../utils/mobile'
import Button from '../Button'
import Modal from '../Modal'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

interface JobInfo {
    title: string
    subtitle: string
    uses: string[]
    startDate: string
    endDate: string
    description: React.JSX.Element
}

interface Props {
    jobs: JobInfo[]
    [_: string]: any
}
interface JobProps {
    job: JobInfo
    i: number
    isMobile: boolean
    iconBoxWidth: number
}

const Job = ({ job, i, isMobile, iconBoxWidth }: JobProps) => {
    const navigate = useNavigate()
    const navigation = useNavigation()
    const currentPath = navigation.location?.pathname ?? '/'

    return (
        <JobBox num={i} animateOnce animateIn="fadeInTop">
            {isMobile && (
                <Subtitle>
                    {job.startDate} - {job.endDate}
                </Subtitle>
            )}
            <Title>{job.title}</Title>
            <Subtitle>{job.subtitle}</Subtitle>

            <IconsBox icons={job.uses} showLabel={false} width={iconBoxWidth} />
            <DescriptionContainer>
                <Description>{job.description}</Description>
            </DescriptionContainer>
            <Spacer />
            <Button
                variant={'contained'}
                color="secondary"
                onClick={() => navigate(`${currentPath}#${job.title.toLocaleLowerCase().replace(' ', '')}`)}
            >
                MORE INFO
            </Button>
        </JobBox>
    )
}

export default function Experience({ jobs, ...rest }: Props): React.ReactElement {
    const screenWidth = useScreenWidth()
    const multiplier = getCurrentScreenMultiplier(screenWidth)
    const isMobile = isMobileFunc(screenWidth)
    const iconBoxWidth = 350 * multiplier
    const location = useLocation()
    const navigate = useNavigate()
    const urlHash = location.hash.replace('#', '')

    const memoizedJobs = useMemo(() => jobs, [jobs])

    const selectedJob = jobs.find((x) => x.title.toLocaleLowerCase().replace(' ', '') === urlHash)
    console.log(urlHash)
    const JobModal = (
        <Modal
            open={jobs.map((x) => x.title.toLocaleLowerCase().replace(' ', '')).includes(urlHash)}
            setOpen={() => navigate(location.pathname)}
            title={selectedJob?.title ?? ''}
        >
            <InnerModalContainer>
                <ModalSubtitle>{selectedJob?.subtitle}</ModalSubtitle>
                <ModalDate>
                    {selectedJob?.startDate} - {selectedJob?.endDate}
                </ModalDate>
                {selectedJob?.description}
            </InnerModalContainer>
        </Modal>
    )

    if (isMobile) {
        return (
            <>
                {JobModal}
                <MainContainer numElements={jobs.length} {...rest}>
                    {jobs.map((job, i) => (
                        <Job job={job} i={i} key={job.title} iconBoxWidth={iconBoxWidth} isMobile={isMobile} />
                    ))}
                    <VerticalLineContainer numRows={jobs.length}>
                        <VerticalLine />
                    </VerticalLineContainer>
                    <CircleContainer num={1} animateOnce animateIn="fadeInTop">
                        <Circle />
                        <Spacer />
                    </CircleContainer>
                    <CircleContainer num={jobs.length * 2 + 1} animateOnce animateIn="fadeInTop">
                        <Circle />
                    </CircleContainer>
                </MainContainer>
            </>
        )
    }

    return (
        <>
            {JobModal}
            <MainContainer numElements={jobs.length} {...rest}>
                {memoizedJobs.map((job, i) => (
                    <React.Fragment key={job.title}>
                        <Job job={job} i={i} key={job.title} iconBoxWidth={iconBoxWidth} isMobile={isMobile} />

                        <HorizontalLine num={i} animateOnce animateIn="fadeInTop" />
                        <DateContainer num={i} animateOnce animateIn="fadeInTop">
                            <p>
                                {job.startDate} - {job.endDate}
                            </p>
                        </DateContainer>
                        <CircleContainer num={i} animateOnce animateIn="fadeInTop">
                            <Circle />
                        </CircleContainer>
                    </React.Fragment>
                ))}
                <VerticalLineContainer numRows={jobs.length}>
                    <VerticalLine />
                </VerticalLineContainer>
            </MainContainer>
        </>
    )
}
