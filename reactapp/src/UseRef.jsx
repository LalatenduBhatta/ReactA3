import { useRef } from 'react'

function UseRef() {
    let count = useRef(100)
    console.log(count);
    const handelClick = () => {
        count.current = count.current + 1
        console.log(count);
    }
    let usernameRef = useRef()
    let passwordRef = useRef()
    let imageRef = useRef()

    const handelSubmit = (event) => {
        event.preventDefault();
        // console.log(usernameRef);
        // console.log(passwordRef);
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        if (!username || !password) {
            alert("fill all the fields")
        }
        else if (username.length < 5) {
            alert("provide atleast 5 chars in username")
        }
        else {
            console.log("submitted")
            imageRef.current.src = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    }
    return (
        <>
            <h1>{count.current}</h1>
            <button
                onClick={handelClick}>IncreaseCount</button>
            <form onSubmit={handelSubmit}>
                <label>USERNAME :</label>
                <input type="text"
                    ref={usernameRef} /> <br />
                <label>Password:</label>
                <input type="password"
                    ref={passwordRef} /> <br />
                <button>Login</button>
            </form>
            <img src="" alt="" ref={imageRef} />
        </>
    )
}

export default UseRef