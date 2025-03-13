import React from 'react'
import { capitalizeFirstLetter } from '../../utils/strings'
import AssetIcon from '../AssetIcon'
import { IconsContainer, IconsLabel } from './styles'
import { getCurrentScreenMultiplier } from '../../utils/mobile'
import { useScreenWidth } from '../../hooks/mobile'
import Tooltip from '../Tooltip'

interface Props {
    icons: string[]
    showLabel?: boolean
    className?: string
    // Width in px. If defined, truncates icons that cant fit, otherwise width fits content
    width?: number
}

export default function IconsBox({ icons, className, showLabel = true, width }: Props): React.ReactElement {
    const screenWidth = useScreenWidth()
    const multiplier = getCurrentScreenMultiplier(screenWidth) // For responsiveness / mobilisation
    const horizontalPadding = 30 * multiplier
    const gap = 25 * multiplier
    const iconContainerWidth = 40 * multiplier
    const iconWidth = 32 * multiplier

    let iconsToShow = icons
    if (width !== undefined) {
        const maxIcons = Math.floor((width + gap - horizontalPadding) / (iconContainerWidth + gap))
        if (maxIcons < icons.length) {
            if (maxIcons > 0) {
                iconsToShow = icons.slice(0, maxIcons - 1)
            }
            iconsToShow.push('more')
        }
    }

    return (
        <IconsContainer className={className} style={{ paddingLeft: horizontalPadding, paddingRight: horizontalPadding, gap, width }}>
            {showLabel && <IconsLabel>Uses:</IconsLabel>}
            {iconsToShow.map((icon) => (
                <Tooltip key={icon} title={capitalizeFirstLetter(icon)} placement="top" arrow>
                    <div style={{ minWidth: iconContainerWidth }}>
                        <AssetIcon name={icon} size={iconWidth} responsive={false} />
                    </div>
                </Tooltip>
            ))}
        </IconsContainer>
    )
}
