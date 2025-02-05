import React, { useState, useContext } from 'react';
import { BsCart2 } from "react-icons/bs";
import { IoMdNotificationsOutline, IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

import NavbarData from "../Data/NavbarData";
import { Link } from "react-router-dom";
import { isLoggedContext } from '../Context/Context';
import UserDashboard from './UserDashboard';
// import pic from 'src/assets/Images/logo1.png';



const Navbar2 = () => {
  const [isClicked, setIsClicked] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedContext);
  const [clickedUser, setClickedUser] = useState(false);

  return (
    <div className="nav-container">
      <div className='navbar' onMouseEnter={()=>{setIsClicked(null)}}>
        <div className="nav-logo">
          <img src="Images/logo1.png" alt="logo" />
          <h2>Bath Caramel</h2>
        </div>

        <div className="nav-search">
          <input type="text" placeholder='Search for products, brands and more' />
          <IoSearchSharp size={30} style={{ position: "absolute", top: "12px", right: "14px" }} />
        </div>

        <div className="nav-btns">
          <Link to="/add-to-cart"><BsCart2 size={38} style={{ cursor: "pointer" }} /></Link>
          <IoMdNotificationsOutline size={38} style={{ cursor: "pointer" }} />
          <Link to="/wishlist"><IoMdHeartEmpty size={38} style={{ cursor: "pointer" }} /></Link>
          <AiOutlineUser size={38} style={{ cursor: "pointer" }} onMouseEnter={() => { setClickedUser(!clickedUser) }} />
        </div>
      </div>

      <div className="subcategory">
        {NavbarData.map((category, index) => (
          <div className="subcategory-box" key={category.id}
            onMouseEnter={() => {setIsClicked(index); console.log(isClicked)}}
            // onMouseLeave={()=>{setIsClicked(null); console.log(isClicked)}}  
          >
            <div className="subcategory-item">{category.title}</div>
          </div>
        ))}
      </div>

      {clickedUser?<UserDashboard/>:null}

      {isClicked !== null && (
        <div className="subcategories-list-div" onMouseEnter={()=>{setIsClicked(index)}} onMouseLeave={()=>{setIsClicked(null)}}>
          <div className="subcategories-list">
            {NavbarData[isClicked].subCategories.map((subcategory, index) => (
              <li key={index}>{subcategory}</li>
            ))}
          </div>

          <div className="subcategories-img-div">
            <img src="Navbar/Category1/1.1.png" alt="" />
            <img src="Navbar/Category1/1.2.png" alt="" />
            <img src="Navbar/Category1/1.3.png" alt="" />
          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar2;
