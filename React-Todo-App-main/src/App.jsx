import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TodoMain from './components/TodoMain'
import { TodoContext } from './context/TodoContext'
// import moment from 'moment'


function App() {
  const [dark, setDark] = useState(true)
  // let result = moment().format('MMMM Do YYYY, h:mm:ss a');
  // console.log(result);
  return (
    <>
      <TodoContext>
        <Navbar dark={dark} setDark={setDark} />
        <TodoMain dark={dark} />
      </TodoContext>
    </>
  )
}

export default App