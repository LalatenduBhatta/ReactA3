import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let user = { username: "ABC", password: "1234" }
    let navigate = useNavigate()
    const submitHandel = (event) => {
        event.preventDefault()
        if (username == user.username && password == user.password) {
            navigate("/")
        }
        else {
            alert("username and password are not matching")
        }
    }
    return (
        <div className="loginpage">
            <form onSubmit={submitHandel}>
                <table>
                    <tr>
                        <td><label>Username :</label></td>
                        <td><input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /></td>
                    </tr>
                    <tr>
                        <td><label>Password :</label></td>
                        <td><input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /></td>
                    </tr>
                    <tr>
                        <td className='login' colSpan={2} align='right'>
                            <button>Login</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Login