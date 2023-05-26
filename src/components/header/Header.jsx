import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '/src/assets/icons/logo';
import SearchIcon from '/src/assets/icons/SearchIcon'
import './header.scss'
function Header() {
  return (
    <>
    
        <header className='header'>
            <div className="left_header">
                <NavLink to={'/'}>
                    <Logo></Logo>
                </NavLink>
            </div>
           <div className="right_header">
                <ul>
                    <li>
                        <NavLink to={'/search'}>
                            <div className="li_wrapper">
                            <img src="/src/assets/icons/searchIcon.svg" alt="..." />
                            <p>Search</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                        <div className="li_wrapper">
                        <img src="/src/assets/icons/cartIcon.svg" alt="..." />
                        <p>(1)</p>
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>Login</NavLink>
                    </li>
                </ul>
           </div>
            </header>
             <div className="type_bar">
             <ul>
                 <li><NavLink className='active_link'>Home</NavLink></li>
                 <li><NavLink>Men</NavLink></li>
                 <li><NavLink>Woman</NavLink></li>
                 <li><NavLink>Kid</NavLink></li>
                 <li><NavLink>Sport</NavLink></li>
             </ul>
         </div>
    </>
    
  )
}

export default Header;
