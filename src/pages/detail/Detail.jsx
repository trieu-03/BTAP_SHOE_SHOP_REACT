import './Detail.scss'
//axios
import axios from 'axios'
//react
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//redux
import { setProductDetail } from '/src/redux/redux-slides/productListSlide'
//component
import DetailProduct from '/src/components/DetailProduct/DetailProduct'
import ListItem from '../../components/listItem/ListItem'

//---------------------------------------------------------------------------------

function Detail() {
	const params = useParams()
	const dispatch = useDispatch()

	const { productDetail } = useSelector(state => state.productReducer)

	const getProductById = async (id) => {
		const result = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
		const action = setProductDetail(result.data.content)
		dispatch(action)
	}

	useEffect(() => {
		getProductById(params.productID)
	}, [params.productID])

	return (
		<div>
			<DetailProduct />
			<h3 className='relate-product'>- Relate Product -</h3>
			<div className="row" style={{ marginLeft: '8.4rem', marginBottom: '10.6rem' }}>
				<ListItem listProductOption={productDetail.relatedProducts || []} option />
			</div>
		</div>
	)
}

export default Detail