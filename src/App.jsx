import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Login2 from "./Components/Login2";
import Register from './Components/Register';
import Register2 from './Components/Register2';
import Navbar2 from './Components/Navbar2';
import Sample from './Components/Sample';
import ProductPage from './Components/ProductPage';

import BrandRegister from "./Components/BrandRegister";
import BrandLogin from "./Components/BrandLogin";
import UserDashboard from './Components/UserDashboard';
import AddReview from './Components/AddReview';
import ProductList from './Components/ProductListPage/ProductList';
import AddToCart from './Components/AddtoCart/AddToCart';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { nameContext } from './Context/Context';
import { isLoggedContext } from './Context/Context';


function App() {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar2/><Carousel/><Main/><Footer/></>
    },
    {
      path:"/login",
      element:<><Login2/></>
    },
    {
      path:"/register",
      element:<><Register2/></>

    },

    {
      path:"/brandregister",
      element:<><BrandRegister/></>

    },

    {
      path:"/brandlogin",
      element:<><BrandLogin/></>

    },

    {
      path:"/view-all",
      element:<><Navbar2/><ProductList/><Footer/></>
    },

    {
      path:"/product",
      element:<><Navbar2/><ProductPage/><Footer/></>
    },

    {
      path:"/addreview",
      element:<><Navbar2/><AddReview/><Footer/></>
    },

    {
      path:"/add-to-cart",
      element:<><Navbar2/><AddToCart/><Footer/></>
    }
  ])

  
  

  return (
    <nameContext.Provider value={{name,setName}}>
    <isLoggedContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    
      <RouterProvider router={router}/>

    </isLoggedContext.Provider>
      
    </nameContext.Provider>
      
    
  )
}

export default App;
