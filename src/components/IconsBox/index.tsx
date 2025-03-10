import React from 'react'
import { capitalizeFirstLetter } from '../../utils/strings'
import AssetIcon from '../AssetIcon'
import { Tooltip } from '@mui/material'
import { IconsContainer, IconsLabel } from './styles'

interface Props {
    icons: string[]
    showLabel?: boolean
    className?: string
    // Width in px. If defined, truncates icons that cant fit, otherwise width fits content
    width?: number
}

export default function IconsBox({ icons, className, showLabel = true, width }: Props): React.ReactElement {
    const horizontalPadding = 30
    const gap = 25
    const iconContainerWidth = 40
    const iconWidth = 32

    let iconsToShow = icons
    if (width !== undefined) {
        const maxIcons = Math.floor((width + gap - horizontalPadding) / (iconContainerWidth + gap))
        console.log(maxIcons)
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
                        <AssetIcon name={icon} size={iconWidth} />
                    </div>
                </Tooltip>
            ))}
        </IconsContainer>
    )
}
