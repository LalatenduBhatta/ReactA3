import React from 'react'

class ClassComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: "Hardik"
        }
    }
    inceremnt = () => {
        // console.log("btn is clicked");
        this.setState({ count: this.state.count + 1 })
    }
    changeName = () => {
        this.setState({ name: "Rohit" })
    }
    render() {
        return (
            <>
                {/* {console.log(this.state)} */}
                <h1>THIS IS A CLASS COMPOENT</h1>
                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.inceremnt}>Increment</button>
                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}

export default ClassComponent