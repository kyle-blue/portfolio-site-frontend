import styled from '@emotion/styled'

const rowHeight = 270
const jobBoxHeight = 350
const descriptionHeight = 100

export const MainContainer = styled.div<{ numElements: number }>`
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto;
    grid-template-rows: repeat(${({ numElements }) => numElements}, ${rowHeight}px);
    width: 1200px;
    padding: 0;
    margin-bottom: ${jobBoxHeight - rowHeight}px;
`

export const JobBox = styled.div<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 1 : 5)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;
    border-radius: 14px;
    box-sizing: border-box;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.2);
    width: 450px;
    height: ${jobBoxHeight}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

export const HorizontalLineContainer = styled.div<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 2 : 4)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    display: flex;
    justify-content: center;
    align-items: center;
    height: ${jobBoxHeight / 2 - 2}px;

    border-bottom: 2px dashed rgba(255, 255, 255, 0.5);
`

export const DateContainer = styled.div<{ num: number }>`
    grid-column: ${({ num }) => (num % 2 == 0 ? 4 : 2)} / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    display: flex;
    justify-content: ${({ num }) => (num % 2 == 0 ? 'left' : 'right')};
    align-items: center;
    height: ${jobBoxHeight}px;
    max-width: 100%;
    position: relative;
    overflow: visible;
    box-sizing: border-box;
    padding: 0 20px;

    & > p {
        color: #ffffff;
        font-size: 15px;
        font-family: 'Poppins Light', sans-serif;
        font-weight: normal;
        min-width: max-content;
        position: absolute;
        text-align: ${({ num }) => (num % 2 == 0 ? 'left' : 'right')};
    }
`

export const VerticalLineContainer = styled.div<{ numRows: number }>`
    margin-top: ${(jobBoxHeight - rowHeight) / 2}px;
    grid-column: 3 / span 1;
    grid-row: 1 / span ${({ numRows }) => numRows};

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const VerticalLine = styled.div`
    border: 0;
    border-left: 3px dashed rgba(255, 255, 255, 1);
    margin: 0;
    margin-left: 1px;
    height: 100%;
    padding: 0;
`

export const Circle = styled.div`
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom: auto;
`
export const CircleContainer = styled.div<{ num: number }>`
    grid-column: 3 / span 1;
    grid-row: ${({ num }) => num + 1} / span 1;

    height: ${jobBoxHeight}px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    color: #ffffff;
    font-size: 24px;
    font-family: 'Poppins Semi Bold', sans-serif;
    margin: 0;
    margin-bottom: 5px;
    font-weight: normal;
    align-self: self-start;
    text-align: left;
    letter-spacing: 4px;
`
export const Subtitle = styled.h2`
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    margin-bottom: 15px;
    white-space: pre-wrap;
    text-align: left;
    align-self: self-start;
`
export const Description = styled.p`
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    text-overflow: ellipsis;
`

export const DescriptionContainer = styled.div`
    height: ${descriptionHeight}px;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
`
