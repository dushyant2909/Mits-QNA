import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { login, logout, selectUser } from './store/slices/authSlice'
import { Header, Loader } from './Components/index'
import { Outlet } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'
// import { auth } from './firebase'
import axios from "axios"
import { login, logout } from './store/slices/authSlice'
// import authService from './appwrite/auth';

function App() {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       }
  //       else
  //         dispatch(logout());
  //     })
  //     .catch((error) => {
  //       console.log("Error in useEffect::app.jsx: ", error);
  //     })
  //     .finally(() => { setloader(false) })
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/v1/users/getCurrentUser")
        const userData = response.data;
        console.log("Current user::", response.data);
        if (response.data.statusCode == 200) {
          dispatch(login({ userData }))
        }
        else
          dispatch(logout())

      } catch (error) {
        console.error("Error in getting current user details ::", error.request.statusText);
      }
    }

    fetchData();
    setloader(false)
  }, [])

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
