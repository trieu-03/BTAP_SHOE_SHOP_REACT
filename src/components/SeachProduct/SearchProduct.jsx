import './SearchProduct.scss'
//lodash
import _ from 'lodash';
//antd
import { Select } from 'antd';
import { Empty } from 'antd';
//react
import React, { useEffect, useState } from 'react';
//Component
import ListItem from '../listItem/ListItem';

//---------------------------------------------------------------------------------

const sort = [
    {
        value: 'desc',
        label: 'Decrease',
    },
    {
        value: 'asc',
        label: 'Ascending',
    },
];

//---------------------------------------------------------------------------------

function SearchProduct(props) {
    const { listProductSearch } = props;
    const [listSort, setListSort] = useState([]);
    const [filter, setFilter] = useState('desc');

    const handleChange = (value) => {
        setFilter(value);
    };

    useEffect(() => {
        setListSort(_.orderBy(listProductSearch, ['price'], [filter]))
    }, [filter, listProductSearch])

    return (
        <>
            <div className='search-result'>
                <p>Price</p>
                <Select className='input-filter'
                    defaultValue="desc"
                    style={{
                        width: 445,
                    }}
                    onChange={handleChange}
                    options={sort}
                />
            </div>
            {listSort.length === 0 ?
                <Empty /> :
                <ListItem listProductOption={listSort} option />
            }
        </>

    )
}

export default SearchProduct