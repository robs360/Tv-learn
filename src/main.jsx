import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Register from './component/register.jsx';
import Login from './component/Login.jsx';
import Authprovider from './component/Authprovider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reg",
        element:<Register></Register>,
      },
      {
        path: "/log",
        element:<Login></Login>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
       <RouterProvider router={router}/>
    </Authprovider>
  </React.StrictMode>,
)
