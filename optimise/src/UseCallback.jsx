import React, { useState, useMemo, useEffect, useCallback } from 'react'
function UseMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(false)
    // const setNumber = () => {
    //     let result = count * 100
    //     return result
    // }
    const setNumber = useCallback(() => {
        let result = count * 100
        return result
    }, [count])
    return (
        <>
            <h1>useCallback()</h1>
            <div style={{
                height: "200px",
                width: "300px",
                backgroundColor: color ? "red" : "blue",
                color: 'white'
            }}>
                <button onClick={() => setColor(!color)}>Change color</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Change Count</button>
            </div>
            <GetNumber number={setNumber} />
        </>
    )
}

function GetNumber({ number }) {
    useEffect(() => {
        console.log("number function updated");
    }, [number])
    return (
        <>
            <h1>Child componet</h1>
            <h2>{number()}</h2>
        </>
    )
}

export default UseMemo