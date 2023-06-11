//react
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// public_icons
import Logo from '/src/assets/icons/logo';
// scss
import { resetUserProfile } from 'src/redux/redux-user/User';
import { ACCESS_TOKEN } from '../../constant';
import { deleteKey, getLocalStorage } from '../../utils';
import './header.scss';


//======================================================
function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartList } = useSelector(state => state.productReducer)
    const { userProfile } = useSelector((state) => state.UserReducer)
    const { avatar } = userProfile
    const handleNavigate = () => {
        navigate('/profile')
    }
    const handleLogout = () => {
        deleteKey(ACCESS_TOKEN)
        dispatch(resetUserProfile())
        navigate('/login')
       
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
                            <NavLink to={'/cart'}>
                                <div className="li_wrapper">
                                    <img src="/src/assets/icons/cartIcon.svg" alt="..." />
                                    <p>({cartList.length})</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            {avatar
                                ? <img onClick={handleNavigate} style={{ width: 40, height: 40, borderRadius: '50%' }} src={avatar} alt="..." />
                                : (getLocalStorage(ACCESS_TOKEN) ? <NavLink to={'/profile'}>Go to profile</NavLink> : <NavLink to={'/register'}>Register</NavLink>)}
                        </li>
                        <li>
                            {getLocalStorage(ACCESS_TOKEN)
                                ? <button className='logout_btn' onClick={handleLogout}>Log out</button>
                                : (getLocalStorage(ACCESS_TOKEN) ? <NavLink to={'/profile'}></NavLink> : <NavLink to={'/login'}>Login</NavLink>)}
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