<<<<<<< HEAD
//react
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// public_icons
import Logo from '/src/assets/icons/logo';
// scss
import './header.scss';


//======================================================

function Header() {
    const { cartList } = useSelector(state => state.productReducer)

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
                            <NavLink to={'/cart'}>
                                <div className="li_wrapper">
                                    <img src="/src/assets/icons/cartIcon.svg" alt="..." />
                                    <p>({cartList.length})</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
=======
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '/src/assets/icons/logo';
import SearchIcon from '/src/assets/icons/SearchIcon'
import './header.scss'
import { deleteKey } from '../../utils';
import { resetUserProfile } from '../../redux/redux-user/User';
import { useDispatch, useSelector } from 'react-redux';
import { ACCESS_TOKEN } from '../../constant';
function Header() {
    const navigate = useNavigate()
    const {userProfile} = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch()

    const handleLogout = () => { 
        //chuyển về trang login
        navigate("/login")
        //xóa localstorage
        deleteKey(ACCESS_TOKEN)
        //reset userLogin ở trên Redux
        const action = resetUserProfile()
        dispatch(action)
    
        //call api logout
    
      }
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
                    {
                        userProfile.email ? (
                    <>
                        <li><p style={{color:"white"}}>{userProfile.email}</p></li>
                        <li><button onClick={() => {handleLogout()}}>Logout</button></li>
                    </>
                    )
                    : (
                    <>
                        <li><NavLink to={"/register"}>Register</NavLink></li>
                        <li><NavLink to={"/login"}>Login</NavLink></li>
                    </>)
                    }   
                </ul>
           </div>
>>>>>>> 0c9c7fbaef3985f5c4b12343d32cd65fddfddcd0
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
