import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <div className='app'>
        <Product />
        <Sidebar />
      </div>
    </>
  )
}

export default App
