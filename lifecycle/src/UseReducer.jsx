import React, { useReducer, useState } from 'react'
import reducer from './reducers/countReducer'
function UseReducer() {
    const [state, dispatch] = useReducer(reducer, 0)
    const [value, setValue] = useState("")
    return (
        <>
            <h1>useReducer() hook</h1>
            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: "inc" })}>+1</button>
            <button onClick={() => dispatch({ type: "dec" })}>-1</button>
            <button onClick={() => dispatch({ type: "inc10" })}>+10</button>
            <button onClick={() => dispatch({ type: "dec10" })}>-10</button>
            <input type="number"
                onChange={(e) => setValue(e.target.value)}
                value={value} />
            <button onClick={() => {
                dispatch({ type: "input", payload: value });
                setValue("")
            }}
            >CHANGE COUNT</button>
        </>
    )
}

export default UseReducer