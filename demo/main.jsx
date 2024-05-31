import React from 'react'
import ReactDOM from 'react-dom/client'
import GitHubProfile from '../src/index.js'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitHubProfile userName="grubersjoe" />
  </React.StrictMode>,
)
