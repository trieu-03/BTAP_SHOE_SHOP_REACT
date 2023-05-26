import './Home.scss'
//react
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
//axios
import axios from 'axios';
//components
import CarouselOponent from '/src/components/carousel/Carousel'
import ListItem from '/src/components/listItem/ListItem'
//redux
import { setListProduct } from '/src/redux/redux-slides/productListSlide';

//-------------------------------------------------------------------------

function Home() {
  const dispatch = useDispatch();
  const getListProduct = async () => {
    const resp = await axios.get('https://shop.cyberlearn.vn/api/Product');

    const action = setListProduct(resp.data.content)
    console.log(action)
    dispatch(action);
  }

  useEffect(() => {
    getListProduct()
  }, [])

  return (
    <>
      <CarouselOponent />
      <h2 className='product-feature'>Product Feature</h2>
      <ListItem />
    </>
  )
}

export default Home