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
import { Button } from '@mui/material'
import { Spacer } from '../utility/Spacer'

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
    return (
        <MainContainer numElements={jobs.length}>
            {jobs.map((job, i) => (
                <>
                    <JobBox num={i} animateOnce animateIn="fadeInTop">
                        <Title>{job.title}</Title>
                        <Subtitle>{job.subtitle}</Subtitle>
                        <IconsBox icons={job.uses} showLabel={false} width={350} />
                        <DescriptionContainer>
                            <Description>{job.description}</Description>
                        </DescriptionContainer>
                        <Spacer />
                        <Button variant={'contained'} color="secondary">
                            MORE INFO
                        </Button>
                    </JobBox>
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
            <VerticalLineContainer numRows={jobs.length} animateOnce animateIn="fadeInTop">
                <VerticalLine />
            </VerticalLineContainer>
        </MainContainer>
    )
}
