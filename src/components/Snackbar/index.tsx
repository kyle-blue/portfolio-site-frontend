import { Snackbar as MuiSnackbar, SnackbarProps, SnackbarContent as MuiSnackbarContent } from '@mui/material'
import styled from '@emotion/styled'
import { muiTextSize, palette } from '../../theme'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'

interface Props extends SnackbarProps {
    type: 'error' | 'warning' | 'success'
}

export default function Snackbar(props: Props): React.ReactElement {
    const message = props.message
    const propsToUse = { ...props }
    if (propsToUse?.['message']) delete propsToUse['message']

    let SnackbarContent = <SuccessSnackbarContent message={message} />
    if (props.type === 'error') SnackbarContent = <ErrorSnackbarContent message={message} />
    if (props.type === 'warning') SnackbarContent = <WarningSnackbarContent message={message} />
    return (
        <MuiSnackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} {...propsToUse}>
            {SnackbarContent}
        </MuiSnackbar>
    )
}

const ErrorSnackbarContent = styled(MuiSnackbarContent)`
    color: ${palette.offWhite};
    background: ${palette.error};
    white-space: pre;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
            font-size: ${muiTextSize * multiplier}px;
            padding: ${8 * multiplier}px ${30 * multiplier}px;
            border-radius: ${8 * multiplier}px;
            box-sizing: border-box;
        `,
    )}
`

const WarningSnackbarContent = styled(MuiSnackbarContent)`
    color: ${palette.offWhite};
    background: ${palette.warning};
    white-space: pre;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
            font-size: ${muiTextSize * multiplier}px;
            padding: ${8 * multiplier}px ${30 * multiplier}px;
            border-radius: ${8 * multiplier}px;
            box-sizing: border-box;
        `,
    )}
`

const SuccessSnackbarContent = styled(MuiSnackbarContent)`
    color: ${palette.offWhite};
    background: ${palette.success};
    white-space: pre;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
            font-size: ${muiTextSize * multiplier}px;
            padding: ${8 * multiplier}px ${30 * multiplier}px;
            border-radius: ${8 * multiplier}px;
            box-sizing: border-box;
        `,
    )}
`
