import React, { Component } from 'react'

class ClassLifecycle extends Component {
    constructor() {//this the 1st method of mounting phase
        super()
        this.state = { count: 0, color: "red" }
    }
    static getDerivedStateFromProps(props, state) {//this is the 2nd method of mounting phase
        // this is also the 1st method of updation phase which will re-write the state with props
        console.log("getDerivedStateFromProps method");
        return { color: props.data } //this uses props to assign as a state
    }
    componentDidMount() {//last method of mounting phase
        console.log("componentDidMount method");//it only executes once after the initial render
    }
    updateState = () => { //STATE UPDATION METHOD
        console.log("state updating");
        this.setState({ count: this.state.count + 1 })
        this.setState({ color: "blue" })
    }
    shouldComponentUpdate() {//2nd method of updating phase 
        //it returns boolean which handel the re-rendering after updation (component will update or not)
        console.log("shouldComponentUpdate method");
        return true;
    }
    getSnapshotBeforeUpdate(preProps, preState) {//this is 4th method in updating phase
        //we can have the access of previous props and state after their updation in dom
        //this method depends upon componentDidUpdate() method
        console.log("getSnapshotBeforeUpdate method")
        console.log(preProps, preState);
        return null
    }
    componentDidUpdate(prevProps, prevState) {//last method updation phase
        //we can perform any task after the dom updation using current or prev props and state
        console.log("componentDidUpdate method");
        if (this.state.count == 5) {
            alert("count is 5")
        }
    }
    componentWillUnmount() {//this is the method of unmounting phase
        //it will execute when we will remove the component in dom
        console.log("componentWillUnmount");
        alert("SOMEONE IS REMOVING ME")
    }
    render() {
        return (
            <>
                {console.log("render method")}
                <h1>CLASS LIFE CYCLE</h1>
                <div style={{ background: this.state.color }}>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.updateState}>Change States</button>
                </div>
            </>
        )
    }
}

export default ClassLifecycle