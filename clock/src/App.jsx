import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Clock from './components/Clock'
import Stopwatch from './components/Stopwatch'
import Timers from './components/Timers'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Clock />}></Route>
          <Route path='/stopwatch' element={<Stopwatch />}></Route>
          <Route path='/timer' element={<Timers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App