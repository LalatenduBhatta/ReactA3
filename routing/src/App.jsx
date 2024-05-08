import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Login from './components/Login'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='*' element={<h1>PAGE NOT FOUND 404 ERROR!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App