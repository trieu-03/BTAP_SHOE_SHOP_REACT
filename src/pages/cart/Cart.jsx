import './Cart.scss'
//react
import React from 'react'
//component
import TableCart from '../../components/Table/TableCart'
import GoLogin from '../../components/go-to-login/GoLogin';

//---------------------------------------------------------------------------------
const ACCESS_TOKEN = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1bkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWSUVXX1BST0ZJTEUiLCJuYmYiOjE2ODYzMTc5NDgsImV4cCI6MTY4NjMyMTU0OH0.hjJHI6i6_0xDRsCDGZwDlyAWe20E2-oJNLNAN316HWo';

function Cart() {
  return (
    <>{true
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

