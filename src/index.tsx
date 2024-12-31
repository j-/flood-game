import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { AppProviders } from './providers';

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
