import React from 'react'
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="links">
                <Link to="/" className='link'><li>CLOCK</li></Link>
                <Link to="/stopwatch" className='link'><li>STOPWATCH</li></Link>
                <Link to="/timer" className='link'><li>TIMER</li></Link>
                <NavLink className='link'><li>ALARM</li></NavLink>
            </div>
        </div>
    )
}

export default Navbar