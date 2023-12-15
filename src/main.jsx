import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WidthProvider from './Context/WidthProvider.jsx'
import './index.css'

// Use ReactDOM.createRoot for concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire application with WidthProvider for screen width context */}
    <WidthProvider>
      {/* Use BrowserRouter for client-side routing */}
      <BrowserRouter>
        {/* Render the main App component */}
        <App />
      </BrowserRouter>
    </WidthProvider>
  </React.StrictMode>,
)
