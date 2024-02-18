import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/slices/authSlice'
import toast from 'react-hot-toast'

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        // as logout is a promise so we use.then
        authService.logout()
            .then(() => {
                dispatch(logout())
                toast.success("Logged out successfully")
            })
            .catch((error) => {
                console.error("Error in logout::", error)
                toast.error("Error in logging out")
            })
    }
    return (
        <button
            className='text-black text-xl font-semibold flex items-center justify-center px-4 py-1 duration-200 border bg-red-100 border-red-400 hover:text-red-400 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn