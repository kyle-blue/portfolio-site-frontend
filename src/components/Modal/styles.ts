import styled from '@emotion/styled'
import { IconButton, Modal as MuiModal } from '@mui/material'
import { palette } from '../../theme'
import { CloseRounded } from '@mui/icons-material'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const StyledModal = styled(MuiModal)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background: #e9e9e9;
    position: relative;
    color: ${palette.offBlack}
        ${mediaQueriesIncludingDefault(
            (multiplier) => `
        padding: ${5 * multiplier}px ${10 * multiplier}px;
        border-radius: ${10 * multiplier}px;
    `,
        )};
`
export const TitleContainer = styled.div`
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;

    & > h1 {
        font-family: 'Poppins', sans-serif;
        color: ${palette.offBlack};
        text-align: center;
    }

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: 0 ${65 * multiplier}px;
        

        & > h1 {
            font-size: ${20 * multiplier}px;
        }
    `,
    )}
`

export const ExitButton = styled(IconButton)`
    position: absolute;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        top: ${13 * multiplier}px;
        right: ${13 * multiplier}px;
    `,
    )}
`

export const ExitIcon = styled(CloseRounded)`
    color: ${palette.offBlack};
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${20 * multiplier}px;
        height: ${20 * multiplier}px;
    `,
    )}
`
