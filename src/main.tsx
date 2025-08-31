import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider defaultTheme='Light'>
      <App />
  </Provider>,
)
