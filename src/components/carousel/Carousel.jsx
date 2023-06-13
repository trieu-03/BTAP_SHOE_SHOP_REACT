import './carousel.scss'
import { Carousel } from 'antd';
//react
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import prev from '/src/assets/icons/prev.svg';
import next from '/src/assets/icons/next.svg';
//-------------------------------------------------------------------------

const contentStyle = {
  margin: 0,
  height: '53rem',
  color: '#fff',
  textAlign: 'center',
  background: '#fff',
  position: 'relative',
};

//-------------------------------------------------------------------------

function CarouselOponent() {
  const carouRef = useRef();
  const { listProduct } = useSelector((state) => state.productReducer)
  const listFilterByFeature = listProduct.filter((item) => item.feature);

  return (
    <div className='carousel_contain'>
      <button className='prev_btn' onClick={() => { carouRef.current.prev() }}>
        <img src={prev} alt="..." />
      </button>
      <Carousel autoplay autoplaySpeed={3000} effect='fade' ref={carouRef}>
        {listFilterByFeature?.map((product, index) =>
          <div key={index}>
            <div className="content_carousel" style={contentStyle}>
              <div className="left_carousel">
                <img src={product.image} alt="..." />
              </div>
              <div className="right_carousel">
                <p className='prod_name'>{product.name}</p>
                <p className='prod_des'>{product.description}</p>
                {/* <button className='prod_btn'>Buy now</button> */}
                <NavLink className='prod_btn' to={`/detail/` + product.id}>Buy now</NavLink>
              </div>
            </div>
          </div>
        )}
      </Carousel>
      <button className='next_btn' onClick={() => { carouRef.current.next() }}>
        <img src={next} alt="..." />
      </button>
    </div>
  )
}

export default CarouselOponent;