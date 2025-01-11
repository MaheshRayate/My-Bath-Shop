import React from 'react';
import "../userdashboard.css";
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { nameContext } from '../Context/Context';

// import { useContext } from 'react';
import { isLoggedContext } from '../Context/Context';


const UserDashboard = () => {

  const {name,setName}=useContext(nameContext);
  const {isLoggedIn,setIsLoggedIn}=useContext(isLoggedContext);

  return (
    <div className="user-dashboard">
        <h2>Hello {name}</h2>
        {/* <h1>Status: {isLoggedIn ? "Logged In" : "Not Logged In"}</h1> */}

        {!isLoggedIn?(<div className="not-logged">
          <p>To start shopping with us</p>
          <button><Link to="/login" style={{textDecoration:"none"}}>Login/SignUp</Link></button>
        </div>

        ):null}

        {isLoggedIn?(<div className="loggedIn">
          <ul className="loggedIn-list">
            <li>Profile</li>
            <li>Orders</li>
            <li>Coupons</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Logout</li>
          </ul>
        </div>):null}
        

    </div>
  )
}

export default UserDashboard;
