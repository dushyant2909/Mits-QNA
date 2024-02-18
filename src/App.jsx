import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './store/slices/authSlice'
import { Header, Loader } from './Components/index'
import { Outlet } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'
import { auth } from './firebase'

import authService from './appwrite/auth';

function App() {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        console.log("UserData::", userData);
        if (userData) {
          dispatch(login({ userData }));
        }
        else
          dispatch(logout());
      })
      .catch((error) => {
        console.log("Error in useEffect::app.jsx: ", error);
      })
      .finally(() => { setloader(false) })
  }, []);

  if (loader) {
    return (
      <Loader />
    )
  }
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Toaster />
    </>
  )
}

export default App
