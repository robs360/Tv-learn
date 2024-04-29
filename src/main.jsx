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
import Private from './component/Private.jsx';
import Update from './component/Update.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Challenge from './Challenge.jsx';
import Categories from './component/Catogories.jsx';


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
        element:<Private><Addspot></Addspot></Private>,
      },
      {
        path: "/myspot",
        element:<Private><Myspot></Myspot></Private>,
      },
      {
        path: "/allspot",
        element:<Allspot></Allspot>,
      },
      {
        path: "/challenge/:name",
        element:<Challenge></Challenge>,
      },
      {
        path: "/update/:id",
        element:<Update></Update>,
      },
      {
        path: "/details/:id",
        element:<Private><Details></Details></Private>,
        loader:({params})=>fetch(`http://localhost:5000/spot/${params.id}`)
        
      },
      {
        path: "/cat",
        element:<Categories></Categories>,
      }
      
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>

       <RouterProvider router={router}/>
       <ToastContainer></ToastContainer>
    </Authprovider>
  </React.StrictMode>,
)
