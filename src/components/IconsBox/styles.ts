import styled from '@emotion/styled'

const labelFontSize = 14
export const IconsLabel = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    font-size: ${labelFontSize}px;
    margin-top: ${-labelFontSize - 10}px;
    font-family: 'Poppins Light', sans-serif;
    font-weight: normal;
    vertical-align: top;
`

export const IconsContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
