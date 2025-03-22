import styled from '@emotion/styled'
import { IconButton, Modal as MuiModal } from '@mui/material'
import { palette } from '../../theme'
import { ArrowBackRounded, CloseRounded } from '@mui/icons-material'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

export const StyledModal = styled(MuiModal)<{ isMobile: boolean }>`
    display: flex;
    ${({ isMobile }) => !isMobile && 'justify-content: center; align-items: center;'}
`
export const InnerContainer = styled.div<{ isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background: #dcdbdf;
    position: relative;
    color: ${palette.offWhite};
    ${({ isMobile }) => isMobile && 'min-width: 100%; min-height: 100%;'}
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        padding: ${5 * multiplier}px ${10 * multiplier}px;
        border-radius: ${10 * multiplier}px;
    `,
    )};
`
export const TitleContainer = styled.div`
    width: 80%;
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
        width: ${24 * multiplier}px;
        height: ${24 * multiplier}px;
    `,
    )}
`

export const GoBackButton = styled(IconButton)`
    position: absolute;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        top: ${13 * multiplier}px;
        left: ${13 * multiplier}px;
    `,
    )}
`

export const GoBackIcon = styled(ArrowBackRounded)`
    color: ${palette.offBlack};
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${24 * multiplier}px;
        height: ${24 * multiplier}px;
    `,
    )}
`
