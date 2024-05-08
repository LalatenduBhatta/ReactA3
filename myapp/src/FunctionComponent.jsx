import React, { useState } from 'react'

function FunctionComponent(props) {
    // console.log(useState("hello"));  //["hello",func]
    const [count, setCount] = useState(10)
    const [name, setName] = useState("Virat")

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Function Componet</h1>
            <h1>{count}</h1>
            <button onClick={increment}>INC +</button>
            <button onClick={() => setCount(count - 1)}>DEC -</button>
            <h2>{name}</h2>
            <button onClick={() => setName("Rahul")}>Change Name</button>
        </>
    )
}

export default FunctionComponent