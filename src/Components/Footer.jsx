import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    function footerSubmit(e){
        e.preventDefault();

    }
  return (
    <div className="footer">
        <div className="footer-left">
            <div className="footer-left-top">
                <h2>Get email offers and latest news from Bath Caramel!</h2>
                <form action="">
                    <label for="email">Enter your Email</label>
                    <input type="email" name="" id="" />
                    <button onClick={footerSubmit} style={{cursor:"pointer"}}>SUBSCRIBE</button>
                </form>
            </div>

            <div className="footer-left-bottom">
                <div className="social-media-div">
                    <h6>GET CONNECTED</h6>
                    <div className="social-icons">
                        <img src="src\assets\footer\instagram.png" alt="" />
                        <img src="src\assets\footer\facebook.png" alt="" />
                        <img src="src\assets\footer\youtube.png" alt="" />
                    </div>
                </div>
                <div className="payment-div">
                    <h6>PAYMENT METHODS</h6>
                    <div className="payment-icons">
                        <img src="src\assets\Payment\googlepay.png" alt="" />
                        <img src="src\assets\Payment\phonepe.png" alt="" style={{width:"50px", height:"34px"}}/>
                        <img src="src\assets\Payment\rupay.png" alt="" style={{width:"40px", height:"34px"}} />
                    </div>
                </div>
                

            </div>

        </div>
        <div className="footer-right">
            <div className="footer-right-top">
                <div className="footer-navlink-container">
                    <h3>CUSTOMER CARE</h3>
                    <ul>
                        <li><a href="">Help & FAQs</a></li>
                        <li><a href="">Shipping</a></li>
                        <li><a href="">Returns & Exchange</a></li>
                        <li><a href="">Order Tracking</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-navlink-container">
                    <h3>MAKE MONEY WITH US</h3>
                    <ul>
                        <li><Link to="brandlogin">Sell Under Bath Caramel</Link></li>
                        <li><a href="">Protect and Build Your Brand</a></li>
                        <li><a href="">Supply To Bath Caramel</a></li>
                        <li><a href="">Order Tracking</a></li>
                    </ul>
                </div>

                <div className="footer-navlink-container">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Order History</a></li>
                        
                    </ul>
                </div>

            </div>

            <div className="footer-right-bottom">
                <div className="footer-privacy-div">
                    <a href="">Terms Of Use |</a>
                    <a href="">Privacy Policy |</a>
                    <a href="">Terms and Conditions</a>
                </div>
                <div>
                <p>© 2024 Bath Caramel. All Rights Reserved.</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
