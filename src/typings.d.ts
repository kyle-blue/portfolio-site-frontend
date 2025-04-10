import '@mui/material/styles'
import '@mui/material/Button'
import '@mui/material/Chip'

declare module '@mui/material/styles' {
    interface Palette {
        white: PaletteColor
    }

    interface PaletteOptions {
        white?: PaletteColorOptions
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        white: true
    }
}
