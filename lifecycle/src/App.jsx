import React, { useState } from 'react'
import Circle from './Circle'
import BgChange from './BgChange'
import UseReducer from './UseReducer'
import FetchData from './FetchData'
import UseEffect from './UseEffect'
import ClassLifecycle from './ClassLifecycle'
import HOC from './HOC'
import Component from './Component'
import BoxBg from './BoxBg'

function App() {
  // const [flag, setFlag] = useState(true)
  // let NewComponent = HOC(Component)
  return (
    <>
      <>
        {/* <button onClick={() => setFlag(false)}>Remove the component</button>
      {flag && <ClassLifecycle data={"green"} />} */}
        {/* <UseEffect /> */}
        {/* <Circle /> */}
        {/* <BgChange /> */}
        {/* <UseReducer /> */}
        {/* <FetchData /> */}
      </>
      <BoxBg />
      {/* <NewComponent name={"Vicky"} age={24} address={"Odisha"} /> */}
      {/* <NewComponent name={"Rocky"} age={22} address={"Delhi"} /> */}
    </>
  )
}

export default App