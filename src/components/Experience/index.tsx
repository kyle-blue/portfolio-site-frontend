import React from 'react'
import {
    MainContainer,
    JobBox,
    HorizontalLine,
    HorizontalLineContainer,
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
                    <JobBox num={i}>
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
                    <HorizontalLineContainer num={i}></HorizontalLineContainer>
                    <DateContainer num={i}>
                        <p>
                            {job.startDate} - {job.endDate}
                        </p>
                    </DateContainer>
                    <CircleContainer num={i}>
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
