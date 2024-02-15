import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className='bg-white rounded-md pl-1 text-lg flex items-center'>
            <FaSearch />
            <input type="search"
                className='bg-transparent p-2 md:w-[500px]'
                placeholder='Search Questions' />
        </div>
    )
}

export default SearchBar