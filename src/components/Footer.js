import {Link} from 'react-router-dom'
import React from 'react'
export default function Footer() {
    return (
        <div>
            <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text mt-2">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://github.com/santosh214">Imentus</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                            <li className="nav-item"><Link className="nav-link "  to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link "  to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link "  to="/contact-us">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
        </div>
    )
}
