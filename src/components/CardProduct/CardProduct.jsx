import './CardProduct.scss';
//react
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//assets
import heartFull from "/src/assets/icons/heartFull.svg";
import heartBorder from "/src/assets/icons/heartBoder.svg";
import axios from 'axios';
import { useSelector } from 'react-redux';
//---------------------------------------------------------------------------------
const ACCESS_TOKEN = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1bkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJWSUVXX1BST0ZJTEUiLCJuYmYiOjE2ODYzMTc5NDgsImV4cCI6MTY4NjMyMTU0OH0.hjJHI6i6_0xDRsCDGZwDlyAWe20E2-oJNLNAN316HWo';

function CardProduct(props) {
    const { product, listFavor, setChange, change} = props;
    const [isFavor, setIsFavor] = useState(false);
    const [imgSrc, setImgSrc] = useState(heartBorder)
    // const {favoriteList } = useSelector((state) => state.userReduxSlides);
    const favoriteList = [];
    useEffect(() => {
        if (listFavor?.find((favorite) => favorite.id === product.id)) {
            setIsFavor(true);
            setImgSrc(heartFull)
        } else {
            setIsFavor(false);
            setImgSrc(heartBorder)
        }
    }, [listFavor])
    useEffect(()=>{
        if (favoriteList?.find((favorite) => favorite.id === product.id)) {
            setIsFavor(true);
            setImgSrc(heartFull)
        } else {
            setIsFavor(false);
            setImgSrc(heartBorder)
        }
    },[favoriteList])

    const changFavorite = async (link) => {
        try {
            await axios({
                method: 'get',
                url: link,
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });
            await setChange(!change);

        } catch (error) {
            throw Error(error)
        }
    };

    const handleChangeFavorite = (id) => {
        changFavorite(`https://shop.cyberlearn.vn/api/Users/${isFavor ? 'unlike' : 'like'}?productId=${id}`)

    }

    return (
        <div className='card-product'>
            <div className="card-product-img">
                <img src={product.image} alt="..." />
            </div>
            <div className="card-product-content">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
            </div>
            <div className="card-product-interact ">

                <NavLink to={`/detail/` + product.id} className='card-product-btn buy-now'>Buy now</NavLink>
                <button className='card-product-btn price'>{product.price ? product.price : 'Check this '}$</button>
            </div>
            <button className='love-btn' onClick={() => handleChangeFavorite(product.id)}><img src={imgSrc} alt="..." /></button>
        </div>
    )
}

export default CardProduct