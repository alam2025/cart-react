import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Orders from './components/Orders';
import Inventory from './components/Inventory';
import Login from './components/Login';
import cardProductsLoader from './components/CardsProductLoader';

const router= createBrowserRouter([

  {
    path: '/',
    element : <Home />,
    errorElement: <ErrorPage/>,

    children:[
      {
        path: '/',
        element :<Shop />,
        // loader: fetch(`products.json`)
      },
      {
        path: 'orders',
        element : <Orders />,
        loader: cardProductsLoader
      },
      {
        path: 'inventory',
        element : <Inventory />
      },
      {
        path : 'login',
        element : <Login />
      }
    
    ]
     
    }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router} />
  // </React.StrictMode>,
)
