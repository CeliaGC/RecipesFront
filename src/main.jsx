import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Router'
import { UserProvider } from './Contexts/UserContext'
import { RouterProvider } from 'react-router-dom'
import { AxiosInterceptor } from './Interceptors/axios.interceptor';

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <UserProvider >
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

