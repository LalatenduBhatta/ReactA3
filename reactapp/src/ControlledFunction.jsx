import { useState } from "react"

function ControlledFunction() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const nameChange = (event) => {
        setName(event.target.value)
    }
    function submitHandel(event) {
        event.preventDefault();
        if (name.length >= 4 && password.length >= 8) {
            alert("form submitted successfully")
            setName("")
            setPassword("")
        } else {
            alert("provide all the required fields before submitting")
        }
    }
    return (
        <>
            <h1>Controlled Form Validation</h1>
            <form onSubmit={submitHandel}>
                <label >Name :</label>
                <input type="text" onChange={nameChange} value={name} />
                {!name &&
                    <span style={{ color: "red", fontSize: "22px" }}>*required</span>}
                {(name && name.length < 4) &&
                    <span style={{ color: "red", fontSize: "18px" }}>
                        name should be 4 chars</span>}
                <br />
                <label >Password :</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                {!password &&
                    <span style={{ color: "red", fontSize: "22px" }}>*required</span>}
                {(password && password.length < 8) &&
                    <span style={{ color: "red", fontSize: "18px" }}>
                        password should be 8 chars</span>}
                <br />
                <button>Login</button>
            </form>
            <h1>{name}</h1>
            <h2>{password}</h2>
        </>
    )
}

export default ControlledFunction