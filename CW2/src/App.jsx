import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  return(
    <div>
      <h1>Каталог товаров</h1>

      <Product
      title = "AirPods 4"
      price={50000}
      inStock={true}
      description = "C активным шумоподавлением"
      rating={5}
      tags={["Новинка"]}
      />

      <Product
      title = "Samsung Galaxy Fit 3"
      price={25000}
      inStock={true}
      description = "Поддержка Samsung Pay, уведомления, звонки"
      rating={4}
      tags={["Новинка"]}
      />

      <Product
      title = "Ноутбук Asus Vivobook 15 "
      price={50000}
      inStock={false}
      description = "X1502VA-BQ830 (90NB10T2-M01470)"
      rating={3}
      tags={["Скидка"]}
      />
    </div>
  )
}
export default App
