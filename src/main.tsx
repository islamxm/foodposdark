import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss';
import App from './App.tsx'
import { Provider as StoreProvider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>
  <App />

)
