import { ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles.css';

const theme = createTheme({
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
    },
  },
});

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
