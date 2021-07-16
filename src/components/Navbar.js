import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <Link to="/" className="nav-link"><h1 className="text-danger">Navbar</h1></Link>
            <Link to="/home" className="nav-link">Home</Link>
        </div>
    )
}
