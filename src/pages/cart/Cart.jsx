import './Cart.scss'
//react
import React from 'react'
//component
import TableCart from '../../components/Table/TableCart'
import GoLogin from '../../components/go-to-login/GoLogin';
import { ACCESS_TOKEN } from '../../constant';
import { getLocalStorage } from '../../utils';


//---------------------------------------------------------------------------------

function Cart() {
  return (
    <>{getLocalStorage(ACCESS_TOKEN)
      ? (
        <div>
          <h2 className='carts'>Carts</h2>
          <TableCart />
        </div>
        )
      : <GoLogin />
    }</>
  )
}

export default Cart

