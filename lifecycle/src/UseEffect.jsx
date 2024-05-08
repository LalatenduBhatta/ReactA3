import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(100)
    // useEffect(() => {
    //     //executes after every render of the component
    //     //inside this method state cahnges makes the component infinte render 
    //     console.log("useEffect without 2nd argument");
    // })

    // useEffect(() => {
    //     //this method is similar to componentDidMount() method in lifcycle methods
    //     //this will execute only once after the initila render of the component
    //     //used to achive any type of side-effects like data fetching 
    //     console.log("useEffect with empty dependecy/array");
    // }, [])

    // useEffect(() => {
    //     //useEffect with dependencies array
    //     //it executes after the render of every dependent state and props cahnging
    //     //it is similar to componentDidUpdate() method
    //     console.log("count1 is cahnged");
    // }, [count1])

    // useEffect(() => {
    //     console.log("this is useEffect");
    //     return () => {
    //         //clean-up function
    //         //this function is similar to componentWillUnmount()
    //         console.log("this is a clean-up function");
    //     }
    // })
    return (
        <>
            {console.log("render method")}
            <h1>useEffect hook</h1>
            <h3>{count1}</h3>
            <h2>{count2}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Change Count1</button>
            <button onClick={() => setCount2(count2 + 10)}>Change Count2</button>
        </>
    )
}

export default UseEffect