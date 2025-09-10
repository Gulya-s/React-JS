import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './UserCard'
import Button from './Button'

function App() {
  const users = [
    {id: 1, name: "Adil Gulsezim", email: "adilgulsezim11@gmail.com"},
    {id: 2, name: "Sultan Aset", email: "sultanaaset@gmail.com"},
    {id: 3, name: "Serikova Diana", email: "Serikova_Diana@gmail.com"},
    {id: 4, name: "Kanatova Zhibek", email: "Kanatovazhibek@gmail.com"},
  ]
  return(
    <div className = "app">
      <h1>Список пользователей</h1>
      <div className = "user_list">
        {users.map((user) => <UserCard key={user.id} name={user.name} email={user.email}/>)}
      </div>
      <Button text = "Добавить пользователя"/>
    </div>
  )
}

export default App
