import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import AppProviders from 'providers/AppProviders';
import './assets/themes/mvd/theme.scss';
import './assets/styles/styles.scss';
import './config/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
