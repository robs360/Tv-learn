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
import Addspot from './component/AddSpot.jsx';
import Myspot from './component/Myspot.jsx';
import Allspot from './component/Allspot.jsx';
import Details from './component/Details.jsx';
import Error from './component/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
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
      {
        path: "/addspot",
        element:<Addspot></Addspot>,
      },
      {
        path: "/myspot",
        element:<Myspot></Myspot>,
      },
      {
        path: "/allspot",
        element:<Allspot></Allspot>,
      },
      {
        path: "/details/:id",
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/spot/${params.id}`)
        
      }
      
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
