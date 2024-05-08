import React, { useState, useMemo } from 'react'
function UseMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(false)
    // const getNumber = () => {
    //     for (let i = 0; i <= 1000000000; i++) { }
    //     return count * 10
    // }
    const getNumber = useMemo(() => {
        for (let i = 0; i <= 1000000000; i++) { }
        return count * 10
    }, [count])
    return (
        <>
            <h1>UseMemo()</h1>
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
            {/* <h1>{getNumber()}</h1> */}
            <h1>{getNumber}</h1>
        </>
    )
}

export default UseMemo