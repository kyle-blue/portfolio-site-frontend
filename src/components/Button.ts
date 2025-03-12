import { Button as MuiButton } from '@mui/material'
import styled from '@emotion/styled'
import { muiTextSize } from '../theme'
import { mediaQueriesIncludingDefault } from '../utils/mobile'

const Button = styled(MuiButton)`
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${muiTextSize * multiplier}px;
        padding: ${8 * multiplier}px ${30 * multiplier}px;
        border-radius: ${8 * multiplier}px;
        box-sizing: border-box;
    `,
    )}
`

export default Button
