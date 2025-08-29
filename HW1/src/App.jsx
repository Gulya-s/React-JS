import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div style={{textAlign: "center", margin: "50px"}}>
      <Header />
      <main style={{textAlign: "center", padding: "22px"}}>
      <h1>Hello, React!</h1>
      </main>
      <Footer />
    </div>
  )
}
export default App;
