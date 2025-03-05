import { createTheme } from '@mui/material'
import { css } from '@emotion/react'

export const palette = {
    main: 'rgb(199, 126, 126)',
    mainDark: 'rgb(173, 94, 94)',
    mainDarker: 'rgb(129, 66, 66)',
    mainLight: 'rgb(236, 168, 168)',
    mainLighter: 'rgb(236, 195, 195)',
    mainOffBlack: 'rgb(68, 61, 61)',
    mainOffWhite: 'rgb(236, 231, 232)',

    secondary: 'rgb(204, 149, 206)',
    secondaryDark: 'rgb(128, 65, 122)',
    secondaryDarker: 'rgb(97, 49, 92)',
    secondaryLight: 'rgb(223, 180, 224)',
    secondaryLighter: 'rgb(238, 207, 240)',
    secondaryOffBlack: 'rgb(70, 57, 67)',
    secondaryOffWhite: 'rgb(236, 231, 236)',

    offWhite: 'rgb(242, 242, 242)',
    offBlack: 'rgb(80, 80, 80)',

    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',

    error: 'rgb(180, 81, 81)',
    warning: 'rgb(180, 168, 0)',
}

export const muiTheme = createTheme({
    typography: {
        fontFamily: `"Futura Light", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
    },
    palette: {
        mode: 'light',
        primary: {
            main: palette.main,
        },
        secondary: {
            main: palette.secondary,
        },
        common: {
            black: palette.offBlack,
            white: palette.offWhite,
        },
        error: {
            main: palette.error,
        },
        warning: {
            main: palette.warning,
        },
        text: {
            primary: palette.offBlack,
            secondary: palette.offBlack,
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontFamily: `"Futura", "Roboto", "Helvetica", "Arial", sans-serif`,
                },
            },
        },
    },
})

export const GlobalStyle = css`
    body {
        margin: 0;
        font-family: 'Futura Light', 'Helvetica', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        background-color: ${palette.secondaryOffWhite};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Futura Light', 'Helvetica', sans-serif;
        color: ${palette.offBlack};
    }

    p {
        color: ${palette.offBlack};
        font-family: 'Futura Light', 'Helvetica', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`
