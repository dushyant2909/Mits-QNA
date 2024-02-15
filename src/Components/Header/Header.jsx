import React from 'react'
import { Logo, SearchBar } from '../index'
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='fixed top-[0px] z-[1000000] min-h-[5vh] w-full'>
            <div className="flex w-full items-center justify-around flex-wrap border border-black/20 bg-gray-300 shadow-md px-2">
                <Link to='/' className="flex items-center py-2">
                    <Logo />
                </Link>
                {/* Search box */}
                <div className="header-middle flex items-center">
                    <SearchBar />
                </div>
                <div className="header-right text-4xl hidden md:flex">
                    <RxAvatar />
                </div>
            </div>
        </header>
    )
}

export default Header