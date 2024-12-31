import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { FC, PropsWithChildren } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#ff4081'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: '#333',
          backgroundColor: '#ddd',
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      boxShadow: 'none',
    },
  },
});

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
