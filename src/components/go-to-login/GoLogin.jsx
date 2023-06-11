import React from 'react'
import './goLogin.scss'
import { NavLink } from 'react-router-dom'

function GoLogin() {
  return (
    <div className='Warning_box_login'>
    <p>You have to Log in before accessing this page !</p>
    <div className="go_to_login">
    <NavLink to={'/login'}>Log in</NavLink>
    </div>
    </div>
  )
}

export default GoLogin;