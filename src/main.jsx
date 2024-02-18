import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

import { AuthLayout } from './Components'

import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import AskQuestionPage from './Pages/AskQuestionPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<HomePage />} />
      <Route path='login' element={<AuthLayout authentication={false}>
        <LoginPage />
      </AuthLayout>} />
      <Route path='signup' element={<AuthLayout authentication={false}>
        <SignupPage />
      </AuthLayout>} />
      <Route path='ask-question' element={<AuthLayout authentication>
        <AskQuestionPage />
      </AuthLayout>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // {/* </React.StrictMode>, */ }
)
