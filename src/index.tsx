import { ThemeProvider, createTheme } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './store';
import { startGame } from './store/actions';
import { trackHighScores } from './track-high-scores';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const persistedReducer = persistReducer({
  key: 'store',
  storage: storageSession,
}, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk, trackHighScores),
));

const persistor = persistStore(store)

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
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </StoreProvider>,
);
