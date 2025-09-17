import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'

function App() {
  return(
    <div style={{fontFamily: "sans-serif", padding: 24}}> 
      <h1>Таймер обратного отчета</h1>
      <Timer />
    </div>
  )  
}

export default App
