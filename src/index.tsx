import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppStateContextProvider } from './hooks/appHook';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppStateContextProvider>
      <App />
    </AppStateContextProvider>
  </BrowserRouter>
);

