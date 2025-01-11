import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
// import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
// import { FaRegAddressCard } from "react-icons/fa6";

import "./AddToCart.css"

const AddToCart = () => {

    const [count, setCount] = useState(1);
    return (
        <div className='add-to-cart-container'>
            <div className="status-container">

                <div className="status-item">
                    <div>
                        <BsCart2 className="status-icon" />
                    </div>
                    <span>Cart</span>
                </div>

                <div className="status-item">
                    <div>
                        <FaRegAddressCard className="status-icon" />
                    </div>
                    <span>Address</span>
                </div>


                <div className="status-item">
                    <div>
                        <MdOutlinePayment className="status-icon" />
                    </div>
                    <span>Payment</span>
                </div>


            </div>

            <div className="add-to-cart-down-container">
                <div className="shopping-cart">
                    <h2>SHOPPING CART</h2>

                    <div className="content-div">
                        <div className="hero-img-container">
                            <img src="src/Components/AddtoCart/Assets/1.png" alt="" />
                        </div>
                        <div className="product-info-div">
                            <h3>Love Beauty & Planet Moisturisng Body Wash 200ml | with Coffee & Warm Vanilla | Sulfate Free | Paraben Free- Liquid Shower Gel</h3>
                            <div className="price-del-off">
                                <p className="price">Price: <span>₹224</span></p>
                                <del>₹300</del>
                                <p className="off">12% off</p>
                            </div>

                            <div className="availability-quantity-div">
                                <p className="availability">In Stock</p>

                                <div className="quantity-div">
                                    <div>
                                        <label for="quantity">Size:</label>
                                        <select name="quantity" id="quantity">
                                            <option value="200 ML">200 ML</option>
                                            <option value="150 ML">150 ML</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="item-quantity-div">
                                    <button onClick={()=>{(count>1)?setCount(count-1):setCount(1)}}>-</button>
                                    <span>{count}</span>
                                    <button onClick={()=>{setCount(count+1)}}>+</button>
                                </div>
                                
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddToCart;
