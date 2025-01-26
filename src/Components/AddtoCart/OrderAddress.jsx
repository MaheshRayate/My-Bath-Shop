import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import "./orderaddress.css";
import CouponSection from './CouponSection';

const OrderAddress = () => {
    return (
        <div className="order-address-div">
            <div className="status-container">

                <div className="status-item">
                    <div>
                        <BsCart2 className="status-icon" />
                    </div>
                    <span >Cart</span>
                </div>

                <div className="status-item">
                    <div>
                        <FaRegAddressCard className="status-icon" />
                    </div>
                    <span style={{ textDecoration: "underline green 3px", color: "green" }}>Address</span>
                </div>


                <div className="status-item">
                    <div>
                        <MdOutlinePayment className="status-icon" />
                    </div>
                    <span>Payment</span>
                </div>


            </div>

            <div className="address-container">
                <div className="address-form-div">
                    <div className="address-form-header">
                        <h2>ADD NEW ADDRESS</h2>
                        <h3>Contact Details</h3>
                    </div>
                    <div className="actual-address-form-div">
                        <form action="">
                            <div className="form-item">
                                <div><label htmlFor="country">Country/Religion</label></div>
                                <select name="country" id="country" className="fullLength">
                                    <option value="India">India</option>
                                    <option value="SriLanka">SriLanka</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Japan">Japan</option>
                                    <option value="China">China</option>
                                    <option value="USA">USA</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>

                            <div className="form-item two-inputs">
                                <div>
                                    <div><label htmlFor="fname">First Name</label></div>
                                    <input type="text" name="fname" id="fname" />
                                </div>
                                <div>
                                    <div><label htmlFor="lname">Last Name</label></div>
                                    <input type="text" name="lname" id="lname" />
                                </div>
                            </div>

                            <div className="form-item">
                                <div><label htmlFor="email">Email</label></div>
                                <input type="email" name="email" id="email" className="fullLength" />
                            </div>

                            <div className="form-item">
                                <div><label htmlFor="phone">Phone Number</label></div>
                                <input type="tel" name="phone" id="phone" className='fullLength' />
                            </div>
                            <h3>Shipping Details</h3>

                            <div className="form-item">
                                <div><label htmlFor="house">Flat/House No.</label></div>
                                <input type="text" name="house" id="house" className='fullLength' />
                            </div>

                            <div className="form-item">
                                <div><label htmlFor="address">Address</label></div>
                                <input type="text" name="address" id="address" className='fullLength' />
                            </div>

                            <div className="form-item two-inputs">
                                <div>
                                    <div><label htmlFor="city">City</label></div>
                                    <input type="text" name="city" id="city" />
                                </div>
                                <div>
                                    <div><label htmlFor="state">State</label></div>
                                    <input type="text" name="state" id="state" />
                                </div>
                            </div>

                            <div className="form-item two-inputs">
                                <div>
                                    <div><label htmlFor="pin">Pin Code</label></div>
                                    <input type="text" name="pin" id="pin" />
                                </div>
                                <div>
                                    <div><label htmlFor="landmark">Famous Landmark</label></div>
                                    <input type="text" name="landmark" id="landmark" />
                                </div>
                            </div>

                            <div className="form-item">
                                <input type="checkbox" name="" id="" style={{marginRight:"5px"}}/><span style={{fontFamily:"Roboto"}}>Make this Default Address</span> 
                            </div>

                            <div className="form-item flex-item">
                                <button type="submit">Continue</button>
                            </div>
                        </form>

                    </div>
                </div>

                <CouponSection/>

            </div>

        </div>
    )
}

export default OrderAddress;
