import { Tooltip as MuiTooltip } from '@mui/material'
import styled from '@emotion/styled'
import { muiTextSize, muiTooltipHorizontalPadding, muiTooltipVerticalPadding } from '../theme'
import { mediaQueriesIncludingDefault } from '../utils/mobile'

interface StyledTooltipProps {
    className?: string
    [other: string]: any
}
const ToBeStyledTooltip = ({ className, ...props }: StyledTooltipProps) => (
    <MuiTooltip children={props.children} title={props.title} {...props} classes={{ tooltip: className }} />
)

const Tooltip = styled(ToBeStyledTooltip)`
    ${mediaQueriesIncludingDefault(
        (multiplier) => `
        font-size: ${muiTextSize * multiplier}px;
        padding: ${muiTooltipVerticalPadding * multiplier}px ${muiTooltipHorizontalPadding * multiplier}px;
        border-radius: ${4 * multiplier}px;
        border: none;
    `,
    )}
`

export default Tooltip
