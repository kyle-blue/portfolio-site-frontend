import React from 'react';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle, muiTheme } from './theme';
import { Provider } from 'react-redux';
import store from './redux';
import { Global } from '@emotion/react';
import { AppRouter } from './Routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme} >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <Global styles={GlobalStyle} />
          <RouterProvider router={AppRouter} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
