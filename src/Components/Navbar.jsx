import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io"

import { IoIosHeartEmpty } from "react-icons/io";

import NavbarData from "../Data/NavbarData";

import { Link } from "react-router-dom";
import UserDashboard from './UserDashboard';

import { useContext } from 'react';
import { isLoggedContext } from '../Context/Context';


const Navbar = () => {

  const subcategoryStyle = {
    // display:"none",
  }

  const [isClicked, setIsClicked] = useState(5);
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedContext);
  const [clickedUser, setClickedUser] = useState(false);

  function handleMouseEnter() {

  }

  return (
    <div className="nav-container">
      <div className='navbar'>

        <div className="nav-logo">
          <img src="src\assets\Images\logo1.png" alt="" />
          <h2>Bath Caramel</h2>
        </div>

        <div className="nav-search">
          <input type="text" name="" id="" placeholder='Search for products, brands and more' />
          <IoSearchSharp size={30} style={{ position: "absolute", top: "12px", right: "14px" }} />
        </div>

        <div className="nav-btns">
          <BsCart2 size={38} style={{ cursor: "pointer" }} />
          {/* <CiDeliveryTruck size={38} style={{cursor:"pointer"}}/> */}
          <IoMdNotificationsOutline size={38} style={{ cursor: "pointer" }} />
          <IoMdHeartEmpty size={38} style={{ cursor: "pointer" }} />
          {/* {(isLoggedIn)?<Link to="/login"><button className="nav-login-btn" onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Login/SignUp</button></Link>:<Link to="/login" style={{color:"black"}}><AiOutlineUser size={38} style={{cursor:"pointer"}}/></Link>} */}
          <AiOutlineUser size={38} style={{ cursor: "pointer" }} onMouseEnter={() => { setClickedUser(!clickedUser) }} />
        </div>
      </div>

      {clickedUser ? <UserDashboard /> : null}



      <div className="subcategory">
        {/* {NavbarData.map(()=>{
        return(

        )
      })} */}

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>Bath Essentials</div>
        </div>

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>BodyCare</div>
        </div>

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>HairCare</div>
        </div>

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>HandCare</div>
        </div>

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>FootCare</div>
        </div>

        <div className="subcategory-box">
          <div className="subcategory-item" onMouseEnter={() => { setIsClicked(0) }}>Special Deals</div>
        </div>

      </div>

      {(isClicked !== 5) ? (<div className="subcategories-list-div">
        <div className="subcategories-list">
          {
            NavbarData[isClicked].subCategories.map((subcategory, index) => {
              return (
                <li>{subcategory}</li>
              )

            })
          }

        </div>

        
      </div>) : null}

  




    </div>



  )
}

export default Navbar;
