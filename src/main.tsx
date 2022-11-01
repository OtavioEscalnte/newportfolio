import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyleComponent } from 'styled-components'

import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { ResetStyle } from './styles/reset'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle/>
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
  </React.StrictMode>
)
