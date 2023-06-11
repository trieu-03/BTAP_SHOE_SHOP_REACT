import './listItem.scss'
//react
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
//component
import CardProduct from '../CardProduct/CardProduct'
import axios from 'axios';
import { useState } from 'react';

//---------------------------------------------------------------------------------
const ACCESS_TOKEN = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1bkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWSUVXX1BST0ZJTEUiLCJuYmYiOjE2ODYzMTc5NDgsImV4cCI6MTY4NjMyMTU0OH0.hjJHI6i6_0xDRsCDGZwDlyAWe20E2-oJNLNAN316HWo';

function ListItem(props) {
  const { option, listProductOption } = props;
  const { listProduct } = useSelector((state) => state.productReducer)
  const [listFavor, setListFavor] = useState([]);
  const [change, setChange] = useState(false);

  const getListFavorite = async () => {
    try {
      const resp = await axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Users/getproductfavorite',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      });
      setListFavor(resp.data.content.productsFavorite)
    } catch (error) {
      throw Error(error)
    }
  };

  useEffect(() => {
    getListFavorite()
  }, [change])

  return (
    <div className="list-product">
      {(option ? listProductOption : listProduct).map((product) =>
        <CardProduct key={product.id} product={product} listFavor={listFavor} setChange={setChange} change={change} />
      )}
    </div>
  )
}

export default ListItem