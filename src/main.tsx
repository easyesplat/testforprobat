import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProbatProviderClient } from '@probat/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProbatProviderClient customerId="f3a91e3e-da2b-4b49-a487-8202d07182c0">
      <App />
    </ProbatProviderClient>
  </React.StrictMode>,
)
