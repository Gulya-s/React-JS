import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameForm from './components/NameForm'

function App() {
  return(
    <div style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>Форма с useRef и useCallback</h1>
      <NameForm />
    </div>
  )
}

export default App
