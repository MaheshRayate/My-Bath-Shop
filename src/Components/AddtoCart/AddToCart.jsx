import React, { useContext, useState } from 'react';
import { BsCart2 } from "react-icons/bs";
// import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
// import { FaRegAddressCard } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import CartItem from '../CartItem/CartItem';
import "./AddToCart.css";
import { cartItemsContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

import data2 from '../../Data/AddToCartData';
import CouponSection from './CouponSection';

const AddToCart = () => {
    const { cartItems, setCartItems } = useContext(cartItemsContext);
    const [totalItems, setTotalItems] = useState([]);

    //State for the total price offer oldPrice,etc
    const [cartInfo, setCartInfo] = useState({
        totalMRP: 0,
        totalPrice: 0,
    })

    // function addToCart(id) {
    //     const newIndex = id - 1;

    //     setCartItems((prevItems) => {

    //         return [...prevItems, data2[newIndex]];
    //     })

    //     setCartInfo((...prevObj) => {
    //         if (cartItems.length === 0) {
    //             return {
    //                 totalMRP: 0,
    //                 totalPrice: 0


    //             }
    //         } else {
    //             return {
    //                 totalMRP: cartItems.reduce((initial, item, index, cartItems) => {
    //                     return initial + parseInt(item.oldPrice);
    //                 }),

    //                 totalPrice: cartItems.reduce((initial, item, index, cartItems) => {
    //                     return initial + parseInt(item.price);
    //                 })
    //             }

    //         }



    //     })

    //     console.log(cartItems);
    //     console.log(id);

    // }

    function addToCart(id) {
        const product = data2.find((item) => item.id === id);
        if (!product) return;

        setCartItems((prevItems) => {
            const updatedCart = [...prevItems, product];
            setCartInfo({
                totalMRP: updatedCart.reduce((sum, item) => sum + parseInt(item.oldPrice || 0), 0),
                totalPrice: updatedCart.reduce((sum, item) => sum + parseInt(item.price || 0), 0),
            });
            return updatedCart;
        });

        console.log("Added to cart:", product);
    }



    function deleteFromCart(id) {
        console.log(id);
        setCartItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index != id;
            })
        })

    }


    return (
        <div className='add-to-cart-container'>
            <div className="status-container">

                <div className="status-item">
                    <div>
                        <BsCart2 className="status-icon" />
                    </div>
                    <span style={{textDecoration:"underline green 3px", color:"green"}}>Cart</span>
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
                    <div className="actual-cart">
                        <h2>SHOPPING CART</h2>
                        <div className="cart-flex-box">
                            {/* <CartItem
                                title="Love Beauty & Planet Moisturisng Body Wash 200ml | with Coffee & Warm Vanilla | Sulfate Free | Paraben Free- Liquid Shower Gel"
                                img="ProductListPage/1.png"
                                price="224"
                                oldPrice="300"
                                offer="12"

                            /> */}

                            {
                                cartItems.length > 0 ? (
                                    cartItems.map((item, index) => (
                                        <CartItem
                                            key={index}
                                            id={index}
                                            title={item.title}
                                            img={item.img}
                                            price={item.price}
                                            oldPrice={item.oldPrice}
                                            offer={item.offer}
                                            onPressDelete={deleteFromCart}
                                        />
                                    ))
                                ) : (
                                    <h1 className="cart-h1">Your Cart is Empty. Add something!</h1>
                                )
                            }

                        </div>
                        <div className="place-order-div">
                            {(cartItems.length>0)?<button style={{cursor:"pointer"}}><Link to="/add-to-cart-address">Place Order</Link></button>:null}
                        </div>
                    </div>

                    <div className="add-from-wishlist">
                        <div className="para-icon-div">
                            <FaRegBookmark style={{ width: "14px", height: "18px" }} />
                            <p>Add More From Wishlist</p>
                        </div>

                        <div className="right-arrow-div">
                            <Link to="/wishlist"><FaChevronRight style={{ cursor: "pointer" }} /></Link>
                        </div>

                    </div>

                </div>

                {/* <div className="coupon-price-section">
                    <div className="coupon-div">

                        <div className="header-div">
                            <IoPricetagOutline size={24} />
                            <h3>Apply Coupons</h3>
                        </div>

                        <div className="apply-coupon">
                            <form action="">
                                <input type="text" name="" id="" placeholder='Enter Coupon Code' />
                                <button type="submit">APPLY</button>
                            </form>

                            <div className="coupons-option-div">
                                <div className="coupons">
                                    <p>Get 10% Off on entire purchase</p>
                                    <h3>HH3YLZXB</h3>
                                </div>
                                <div className="coupons">
                                    <p>Get 20% off on above Rs.5000</p>
                                    <h3>YLZASHX3</h3>
                                </div>
                                <div className="coupons">
                                    <p>Save Rs. 193 on above purchase of Rs. 1000</p>
                                    <h3>YLZASHXB</h3>
                                </div>
                                <div className="coupons">
                                    <p>Get 5% off on above  Rs.1500</p>
                                    <h3>AH3YHVXB</h3>
                                </div>
                            </div>
                            <div className="login-comment">
                                <p><Link to="/login">Login</Link> to get upto   100 OFF On First Order </p>

                            </div>
                        </div>
                    </div>


                    <div className="offer-price-div">

                        <h3>Price Details</h3>
                        <div className="price-item">
                            <p>Total MRP</p>
                            <p className="actual-value">₹{cartInfo.totalMRP}</p>
                        </div>

                        <div className="price-item">
                            <p>Discount on MRP</p>
                            <p className="actual-value">-₹76</p>
                        </div>

                        <div className="price-item">
                            <p>Coupon Discount</p>
                            <p className="actual-value" style={{ textAlign: "center", color: "red" }}>Apply</p>
                        </div>

                        <div className="price-item">
                            <p>Shipping Charges</p>
                            <p className="actual-value" style={{ color: "green" }}>FREE</p>
                        </div>

                        <div className='total-price-div'>
                            <div className="price-item">
                                <p style={{ fontSize: "17px", fontWeight: "500" }}>Total Amount</p>
                                <p className="actual-value" style={{ fontSize: "17px", fontWeight: "500" }}>₹{cartInfo.totalPrice}</p>
                            </div>

                        </div>

                    </div>

                </div> */}
                <CouponSection/>
            </div>

            <div className="suggestion-div">
                <h2>You May Also Like:</h2>
                <div className="products-flex-container">
                    {data2.map((item, index, data2) => {
                        if (index <= 7) {
                            return <Card
                                key={index}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                offer={item.offer}
                                oldPrice={item.oldPrice}
                                onButtonClick={addToCart}
                            />
                        }
                    })}
                </div>

                <h2>Complete Your Basket With These Items</h2>
                <div className="products-flex-container">
                    {data2.map((item, index, data2) => {
                        if (index > 7 && index < 16) {
                            return <Card
                                key={index}
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                offer={item.offer}
                                oldPrice={item.oldPrice}
                                onButtonClick={addToCart}
                            />
                        }
                    })}
                </div>

            </div>

        </div>


    )
}

export default AddToCart;
