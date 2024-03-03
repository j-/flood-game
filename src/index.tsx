import { ThemeProvider, createTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './store';
import { startGame } from './store/actions';
import { trackHighScores } from './track-high-scores';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './styles.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, trackHighScores),
));

store.dispatch(startGame());

const root = createRoot(document.getElementById('root')!);

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

root.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>,
);
