import React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IoPricetagOutline } from "react-icons/io5";
import CartItem from '../CartItem/CartItem';
import { cartItemsContext } from '../../Context/CartContext';
import data2 from '../../Data/AddToCartData';



const CouponSection = () => {
    const { cartItems, setCartItems } = useContext(cartItemsContext);
    // State for mantaining totalPrice and totalMRP of the cart items

    const [cartInfo, setCartInfo] = useState({
            totalMRP: 0,
            totalPrice: 0,
    })

    useEffect(() => {

        setCartInfo(()=>{
            return {
                totalMRP:cartItems.reduce((sum, item) => sum + parseInt(item.oldPrice || 0), 0),
                totalPrice:cartItems.reduce((sum, item) => sum + parseInt(item.price || 0), 0)

            }
        })
      
    }, [cartItems])
    

    return (
        <div className="coupon-price-section">
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

        </div>
    )
}

export default CouponSection;
