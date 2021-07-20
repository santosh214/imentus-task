import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    console.warn('navbarprops',props)
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/home">IMENTUS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/home">About</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/home" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/home">All Products</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/men">Mens</Link></li>
                                <li><Link className="dropdown-item" to="/kids">Kids</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                      <Link to="/cart">  <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{props.cartData.length}</span>
                        </button></Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}
