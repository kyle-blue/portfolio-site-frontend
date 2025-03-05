import React from 'react'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyle, muiTheme } from './theme'
import { Provider } from 'react-redux'
import store from './redux'
import { Global } from '@emotion/react'
import { AppRouter } from './Routes'

function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <Global styles={GlobalStyle} />
                <RouterProvider router={AppRouter} />
            </ThemeProvider>
        </Provider>
    )
}

export default App
