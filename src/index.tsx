import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { startGame } from './store/actions';
import { trackHighScores } from './track-high-scores';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, trackHighScores),
));

store.dispatch(startGame());

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
