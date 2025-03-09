import styled from '@emotion/styled'

export const MainContainer = styled.div`
    border: 5px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    padding: 50px 40px;
    box-sizing: border-box;
    width: 375px;
    height: fit-content;
`

export const Title = styled.h1`
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    font-family: 'Poppins Bold', sans-serif;
    font-weight: normal;
    letter-spacing: 6px;
    text-align: center;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const Subtitle = styled.h2`
    color: #ffffff;
    font-size: 14px;
    font-family: 'Poppins light', sans-serif;
    font-weight: normal;
    text-align: center;
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
`

export const RowText = styled.p`
    color: #ffffff;
    margin: 0;
    font-size: 16px;
    font-family: 'Jetbrains Mono Medium', sans-serif;
    font-weight: normal;
    text-align: center;
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
    white-space: pre-wrap;
`
export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
export const AllRowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 40px;
`
