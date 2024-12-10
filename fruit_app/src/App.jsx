import React from 'react'
import './App.css'
import {Navbar} from './components/navbar/Navbar'
import {Product} from './components/product/Product'
import {Sidebar} from './components/sidebar/Sidebar'

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
