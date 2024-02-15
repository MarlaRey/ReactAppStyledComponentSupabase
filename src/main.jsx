import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './StyledComponents/Global.style.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './StyledComponents/Theme.style.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* her kaldes temaet theme fra Styled Components */}
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
  
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
