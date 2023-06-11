import './DetailProduct.scss'
//react
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
//redux
import { setToCart } from '/src/redux/redux-slides/productListSlide'

//---------------------------------------------------------------------------------

function DetailProduct() {
    const dispatch = useDispatch()
    const params = useParams()

    const { productDetail, cartList } = useSelector(state => state.productReducer)
    const [count, setCount] = useState(0);

    useEffect(() => {
        const product = cartList.find((item) => item.id == params.productID);
        setCount(product?.count || 0)
    }, [params.productID]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList))
    }, [cartList]);


    const handleChangeNumber = (value) => {
        if (count + value >= 0) {
            setCount(count + value)
        }
    }

    const addToCart = () => {
        let cart = { ...productDetail, count }
        dispatch(setToCart(cart))
    }

    return (
        <div className='detail-product row'>
            <div className="detail-product-left">
                <img src={productDetail.image} alt="" />
            </div>
            <div className="detail-product-right">
                <h2>{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <h3>Available size</h3>
                {productDetail.size?.map((item, index) => {
                    return (
                        <button className='btn-size' key={index}>{item}</button>
                    )
                })}
                <span className='detail-price'>{productDetail.price}$</span>
                <div >
                    <button className='btn-quantity' onClick={() => { handleChangeNumber(1) }}>+</button>
                    <span>{count}</span>
                    <button className='btn-quantity' onClick={() => { handleChangeNumber(-1) }}>-</button>
                </div>
                <button className='add-cart' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default DetailProduct