import styled from 'styled-components'
import { mediaQueriesIncludingDefault } from '../../utils/mobile'
import { TextField as MuiTextField } from '@mui/material'
import ResponsiveButton from '../../components/Button'

export const TextField = styled(MuiTextField)`
    max-width: 95vw;

    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${900 * multiplier}px;
    `,
    )}
`

export const SendButton = styled(ResponsiveButton)`
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        width: ${150 * multiplier}px;
    `,
    )}
`
