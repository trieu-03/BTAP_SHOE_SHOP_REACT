import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className="footer-wrapper">
            <div className="row w-100">
                <div className="col-4">
                    <div className="footer-content">
                        <p className='footer-title'>GET HELP</p>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Nike</a></li>
                            <li><a href="#">Adidas</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 col-border">
                <div className="footer-content footer-content-betweenPosition">
                        <p className='footer-title'>SUPPORT</p>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Phone</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                <div className="footer-content">
                        <p className='footer-title'>REGISTER</p>
                        <ul>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={'/profile'}>Profile</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-footer">
            <p>© 2023 Cybersoft All Rights Reserved | Copyright Theme by Binh Trieu And Dang Khoa.</p>
        </div>
    </div>
  )
}

export default Footer