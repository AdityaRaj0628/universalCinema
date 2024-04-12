import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
// import MyContext from './assets/components/myContext/MyContext.jsx'
import MyContext from './assets/Components/myContext/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext>
    <App />
  </MyContext>,
)
