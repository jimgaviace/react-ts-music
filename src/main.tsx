import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'
import './assets/css/index.less'

import App from '@/App.tsx'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
  
)
