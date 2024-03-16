import { FC, PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import rootReducer from '../store';
import { startGame } from '../store/actions';
import { trackHighScores } from '../track-high-scores';

const persistedReducer = persistReducer({
  key: 'store',
  storage: storageSession,
}, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk, trackHighScores),
));

const persistor = persistStore(store)

store.dispatch(startGame());

export const Store: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </StoreProvider>
);
