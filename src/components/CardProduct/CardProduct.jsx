import './CardProduct.scss';
//react
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//---------------------------------------------------------------------------------

function CardProduct(props) {
    const { product, show } = props;
    const [favorite, setFavorite] = useState(false);

    const [imgSrc, setImgSrc] = useState("/src/assets/icons/heartBoder.svg")

    const handleChangeFavorite = () => {
        setFavorite(!favorite)
        setImgSrc(favorite ? "/src/assets/icons/heartBoder.svg" : "/src/assets/icons/heartFull.svg")
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
                <button className='card-product-btn price'>{product.price}$</button>
            </div>
            {show &&
                <button className='love-btn' onClick={() => handleChangeFavorite()}><img src={imgSrc} alt="..." /></button>
            }
        </div>
    )
}

export default CardProduct