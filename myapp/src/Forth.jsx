import React from 'react'

function Forth() {
    // let fruits = ["apple", "banana", "sapota", "mango", "grapes"]
    // let fruitsDisplay = []
    // for (let fruit of fruits) {
    //     fruitsDisplay.push(<li>{fruit}</li>)
    // }
    let student = {
        name: "Dhoni",
        age: "41",
        address: "Ranchi"
    }
    // let studentDisplay = []
    // for (let key in student) {
    //     // console.log(key, student[key]);
    //     studentDisplay.push(<h3>{key}:{student[key]}</h3>)
    // }
    return (
        <>
            {/* {fruitsDisplay} */}
            {/* <div style={{ display: "flex", gap: "20px", background: "yellow" }}>
                {fruits.map(ele => {
                    return <h1>{ele}</h1>
                })}
            </div> */}
            <div>
                <h1>STUDNET DETAILS</h1>
                <h2>Name: {student.name}</h2>
                <h2>Age: {student.age}</h2>
                <h2>Address: {student.address}</h2>
            </div>
            {/* {studentDisplay} */}
            {
                Object.values(student).map(ele => {
                    return <h2>{ele}</h2>
                })
            }
        </>
    )
}

export default Forth