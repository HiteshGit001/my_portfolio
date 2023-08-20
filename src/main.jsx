import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { apiPlugin, storyblokInit } from '@storyblok/react'
import { components } from './cms/index.jsx'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  apiOptions: {
    cache: {
      type: 'memory',
      clear: 'auto'
    },
  },
  use: [apiPlugin],
  components,
  bridge: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
