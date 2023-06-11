import './CartTable.scss';
//axios
import axios from 'axios';
//sweetalert2
import Swal from 'sweetalert2'
//antd
import { Space, Table } from 'antd';
import { InputNumber } from 'antd';
const { Column } = Table;
//react
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { changeCount, removeProdCart, setHistoryOrder } from '/src/redux/redux-slides/productListSlide'

//---------------------------------------------------------------------------------

const TableCart = () => {
  const dispatch = useDispatch();
  // const { profileData } = useSelector((state) => state.userReduxSlides)
  const profileData = {
    email: 'un@gmail.com'
  }
  const { cartList } = useSelector(state => state.productReducer);
  const [listOrder, setListOrder] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setListOrder(selectedRows)
    }
  };

  const handleChangeCount = (id, value) => {
    if (value > 0) {
      dispatch(changeCount({ id, value }))
    }
  };

  const handleDelete = (id) => {
    const list = cartList.filter((item) => item.id !== id)
    Swal.fire({
      title: 'Are you sure to delete this product',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeProdCart(id))
        localStorage.setItem('cart', JSON.stringify(list))
        Swal.fire(
          'Delete!',
          'You have deleted this product!',
          'success'
        )
      }
    })
  };

  const handleSubmit = async () => {
    if (listOrder.length === 0) {
      return Swal.fire(
        'Order Empty!',
        `You haven't select any order!`,
        'warning'
      )
    }

    let ordersSubmit = listOrder.map(item => ({
      productId: `${item.id}`,
      quantity: item.count
    }));;

    Swal.fire({
      title: 'Are you sure to submit order',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Deny'
    })
      .then(async (result) => {

        if (result.isConfirmed) {
          const resp = await axios.post('https://shop.cyberlearn.vn/api/Users/order', {
            orderDetail: ordersSubmit,
            email: profileData.email,
          });

          listOrder.forEach(item => {
            dispatch(removeProdCart(item.id))
          });

          const orderTime = new Date(resp.data.dateTime);
          const time = {
            day: orderTime.getDate(),
            month: orderTime.getMonth() + 1,
            year: orderTime.getFullYear()
          }

          dispatch(setHistoryOrder({ list: listOrder, date: time }))

          Swal.fire(
            'Success!',
            'You order have been transfer!',
            'success'
          )

        }
      })
  };

  return (
    <div>
      <Table
        className='table'
        id='table'
        pagination={false}

        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={cartList}
        rowKey={"id"}>
        <Column title="ID" dataIndex="id" align='center' />
        <Column title="IMAGE" dataIndex="image" align='center'
          render={(_, product) => (
            <img height={50} width={60} src={product.image} alt="..." />
          )}
        />
        <Column title="NAME" dataIndex="name" />
        <Column title="PRICE" dataIndex="price" align='center'
          render={(_, product) => (
            <>{product.price}$</>
          )}
        />
        <Column title="QUANTITY" dataIndex="count" align='center'
          render={(_, product) => (
            <Space size={'middle'}>
              <button className='btn-quantity' disabled={!isEdit}
                onClick={() => handleChangeCount(product.id, product.count + 1)}>+</button>
              <InputNumber type='number' className='inputCount' size='small' disabled={!isEdit}
                value={product.count}
                onChange={(value) => handleChangeCount(product.id, value)}
              />
              <button className='btn-quantity' disabled={!isEdit}
                onClick={() => handleChangeCount(product.id, product.count - 1)}>-</button>
            </Space>
          )}
        />
        <Column title="TOTAL" dataIndex="total" align='center'
          render={(_, product) => (
            <>{product.price * product.count}$</>
          )}
        />
        <Column title="Action" key="action" align='center'
          render={(_, product) => (
            <>
              <button className='btn-edit' onClick={() => setIsEdit(!isEdit)}>{!isEdit ? 'EDIT' : 'SAVE'}</button>
              <button className='btn-delete' onClick={() => handleDelete(product.id)}>DELETE</button>
            </>
          )}
        />
      </Table>
      <div className='d-flex justify-content-end'>
        <button className='submit-order' onClick={handleSubmit}>submit order</button>
      </div>
    </div>
  );
};
export default TableCart;