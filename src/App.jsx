import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import { Home } from './pages/Home'
// import { About } from './pages/About'
// import { Products } from './pages/Products'
// import { Contact } from './pages/Contact'
// import { Product } from './pages/Product'
// import { Notfound } from './pages/Notfound'
import { LoginForm } from './components/login/Login'
import { SignupForm } from './components/signup/Signup'


// import State from './components/State'

function App() {

  return (
    <>
      {/* <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id/:name' element={<Product />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
