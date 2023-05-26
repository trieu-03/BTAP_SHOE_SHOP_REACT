import React from 'react'
import DetailProdTable from './DetailProdTable'
import './tableFormat.scss'
function ProdTable(props) {
  return (
    <>
        <div className="prod_table">
            <p className='status_table'>+ Orders have been placed on 09 - 19 - 2020</p>
            <table>
                <thead>
                    <tr className='table-row'>
                        <th className='td_id'>id</th>
                        <th className='td_img'>Image</th>
                        <th className='td_name'>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                <DetailProdTable/>
                </tbody>
            </table>
            <div className="page_number">
                <div className="page_number_wrapper">
                    <div className="square">
                        <img src="/src/assets/icons/arrowLeft.svg" alt="..." />
                    </div>
                    <div className="square">2</div>
                    <div className="square">3</div>
                    <div className="square">...</div>
                    <div className="square">9</div>
                    <div className="square">10</div>
                    <div className="square">
                        <img src="src/assets/icons/arrowRight.svg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProdTable