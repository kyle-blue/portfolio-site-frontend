import React from 'react'
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
} from './styles'
import IconsBox from '../IconsBox'
import { Spacer } from '../utility/Spacer'
import { useScreenWidth } from '../../hooks/mobile'
import { getCurrentScreenMultiplier } from '../../utils/mobile'
import { isMobile as isMobileFunc } from '../../utils/mobile'
import Button from '../Button'

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
}

export default function Experience({ jobs }: Props): React.ReactElement {
    const screenWidth = useScreenWidth()
    const multiplier = getCurrentScreenMultiplier(screenWidth)
    const isMobile = isMobileFunc(screenWidth)
    const iconBoxWidth = 400 * multiplier

    const Job = ({ job, i }: { job: JobInfo; i: number }) => (
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
            <Button variant={'contained'} color="secondary">
                MORE INFO
            </Button>
        </JobBox>
    )

    if (isMobile) {
        return (
            <MainContainer numElements={jobs.length}>
                {jobs.map((job, i) => (
                    <Job job={job} i={i} />
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
        )
    }

    return (
        <MainContainer numElements={jobs.length}>
            {jobs.map((job, i) => (
                <>
                    <Job job={job} i={i} />

                    <HorizontalLine num={i} animateOnce animateIn="fadeInTop" />
                    <DateContainer num={i} animateOnce animateIn="fadeInTop">
                        <p>
                            {job.startDate} - {job.endDate}
                        </p>
                    </DateContainer>
                    <CircleContainer num={i} animateOnce animateIn="fadeInTop">
                        <Circle />
                    </CircleContainer>
                </>
            ))}
            <VerticalLineContainer numRows={jobs.length}>
                <VerticalLine />
            </VerticalLineContainer>
        </MainContainer>
    )
}
