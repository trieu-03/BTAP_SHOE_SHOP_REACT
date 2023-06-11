import './Search.scss';
//axios
import axios from 'axios';
//antd
import { Button } from 'antd';
//react
import React, { useState } from 'react'
//components
import SearchProduct from 'src/components/SeachProduct/SearchProduct'

//---------------------------------------------------------------------------------

function Search() {
  const [keyWord, setKeyWord] = useState('');
  const [listProductSearch, setListProductSearch] = useState([]);

  const handleChangeKeyWord = (event) => {
    setKeyWord(event.target.value)
  }

  const handleSearch = async () => {
    try {
      const resp = await axios.get(`https://shop.cyberlearn.vn/api/Product?keyword=${keyWord}`)
      setListProductSearch(resp.data.content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='search'>
      <p className='search-text'>Search</p>
      <div className='search-group'>
        <input className='input-search' type="text" placeholder='Product name...' onChange={handleChangeKeyWord} />
        <Button className='btn-search' shape='round' onClick={handleSearch}>Search</Button>
      </div>
      <h2 className='search-feature'>Search result</h2>
      <SearchProduct listProductSearch={listProductSearch} />
    </div>
  )
}

export default Search