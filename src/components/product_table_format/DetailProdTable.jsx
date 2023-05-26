import React from 'react'
import './tableFormat.scss'
function DetailProdTable() {
  return (
    <tr className='row_detail_prod'>
        <td className='td_id'>1</td>
        <td className='td_img'><img src="https://shop.cyberlearn.vn/images/nike-air-max-270-react.png" alt="..." /></td>
        <td className='td_name'>Product 1</td>
        <td>1000</td>
        <td className='td_quantity'><span>2</span></td>
        <td>2000</td>
    </tr>
  )
}

export default DetailProdTable