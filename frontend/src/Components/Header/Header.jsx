import React from 'react'
import { Logo, SearchBar } from '../index'
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../index'
import LogoutBtn from './LogoutBtn'

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    console.log("AUthstatus in header::", authStatus);
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
                {authStatus && (
                    <div className="text-4xl flex items-center gap-3">
                        <RxAvatar />
                        <LogoutBtn />
                    </div>
                )}
                {!authStatus && (
                    <div className="text-4xl flex items-center gap-3">
                        <Link
                            to={'/login'}
                            className='text-xl font-semibold bg-green-400 hover:bg-green-500
                        transition-all py-1 px-4 rounded-lg border border-black'>Login</Link>
                        <Link
                            to={'/signup'}
                            className='text-xl font-semibold bg-orange-400 hover:bg-orange-500
                        transition-all py-1 px-4 rounded-lg border border-black'>Signup</Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header