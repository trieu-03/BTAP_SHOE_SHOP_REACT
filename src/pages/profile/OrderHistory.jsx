import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Pagination} from 'antd'
import "./orderHistory.scss"


const PAGE_SIZE = 2; 

function OrderHistory() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState({})
    const {userProfile} = useSelector((state) => state.UserReducer);
    const {ordersHistory} = userProfile;
    console.log(ordersHistory)

    useEffect(()=>{
        if (ordersHistory != undefined){
            let newData = ordersHistory.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
            setData(newData)
        }
    },[page])


    // https://shop.cyberlearn.vn/swagger/index.html
    return (
        <div className='mt-5 container'>
            {
                data.length && data.map((order, index)=>{
                    return (
                        <div>
                            <p className='order-Date'>+ Order has been placed on {order.date.replace("T", " ")}</p>
                            <table className='table mb-5 text-center'>
                                <thead className='order-Heading'>
                                    <tr>
                                        <td>id</td>
                                        <td>img</td>
                                        <td>name</td>
                                        <td>price</td>
                                        <td>quantity</td>
                                        <td>total</td>
                                    </tr>
                                </thead>
                                <tbody className='order-Body'>
                                    <tr>
                                        <td>{order.id}</td>
                                        <td><img src={order.orderDetail[0].image} alt="" style={{width: "8rem"}}/></td>
                                        <td>{order.orderDetail[0].name}</td>
                                        <td>{order.orderDetail[0].price}</td>
                                        <td><p className='order-Quant '>{order.orderDetail[0].quantity}</p></td>
                                        <td>{order.orderDetail[0].price * order.orderDetail[0].quantity} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
                
                
            }
            <div className='d-flex justify-content-end'>
            {
                ordersHistory && (ordersHistory.length / PAGE_SIZE) > 1 && (
                    <Pagination
                        total={ordersHistory.length}
                        current={page}
                        pageSize={PAGE_SIZE}
                        onChange={(page) => setPage(page)}
                    />
                )
            }
            </div>
        </div>
    )
}

export default OrderHistory