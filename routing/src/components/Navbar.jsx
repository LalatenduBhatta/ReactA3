import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="logo">NAVBAR</div>
                <div className="nav-links">
                    <Link to="/" className='link'>HOME</Link>
                    <Link to="/about" className='link'>ABOUT</Link>
                    <Link to="cart" className='link'>CART</Link>
                </div>
                <div className="login">
                    <Link to={"/login"}><button>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar