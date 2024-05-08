import React from 'react'
import { Provider } from "react-redux"
import Counter from './Counter'
import store from './redux/Store/Store'

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App

// https://vicky-todo-react-app.netlify.app/