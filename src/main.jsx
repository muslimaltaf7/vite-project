import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import TrendingBlogs from './CarouselComponent.jsx'
import Card from './card.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    
  <Card />
    <TrendingBlogs />
  </React.StrictMode>,
)
