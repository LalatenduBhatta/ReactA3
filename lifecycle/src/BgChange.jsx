import React, { useEffect, useState } from 'react'

function BgChange() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    const increment = () => {
        setCount(count + 1)//async
    }
    useEffect(() => {
        if (count === 2) {
            setColor("yellow")
        } else if (count > 5) {
            setColor("blue")
        }
    }, [count])
    return (
        <>
            <div style={{
                height: "200px", width: "400px",
                boxShadow: "0 0 15px black",
                backgroundColor: color
            }}>
                <h1>{count}</h1>
                <button style={{ padding: "20px 30px", fontSize: "25px" }}
                    onClick={increment}
                >+</button>
                <button style={{ padding: "20px 30px", fontSize: "25px" }} onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    )
}

export default BgChange