import React from "react"
import "./First.css"
function First() {
    let h1Style = {
        backgroundColor: "red",
        color: "rgb(255,255,255)",
        height: "100px",
        width: "30rem",
        border: "5px solid black",
        borderRadius: "10px"
    }
    return (
        <div>
            <h1 style={h1Style}>WELCOME TO REACT</h1>
            <h2 className="react">REACT IS EASY AND FUN TO LEARN</h2>
        </div>
    )
}

export default First;
