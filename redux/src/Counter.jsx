import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./redux/Action/CountAction"

function Counter() {
    let count = useSelector((store) => store.CountReducer)
    // console.log(count);
    let dispacth = useDispatch()
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispacth(increment())}>+</button>
            <button onClick={() => dispacth(decrement())}>-</button>
        </>
    )
}

export default Counter