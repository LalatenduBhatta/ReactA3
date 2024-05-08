import React from "react"
import image from "./flower.jpg"

class Second extends React.Component {
    constructor() {
        super()
        this.myName = "xyz"
    }
    render() {
        return (
            <div>
                <h1>HI FROM CLASS COMOPNENT</h1>
                <h2>{this.myName}</h2>
                <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <img src={image} alt="" height={"300px"} width={"700px"} />
                <img src="images/nature.webp" alt="" />
            </div>
        )
    }
}

export default Second