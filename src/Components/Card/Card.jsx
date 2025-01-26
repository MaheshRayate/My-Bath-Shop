import React from 'react';
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartItemsContext } from '../../Context/CartContext';

const Card = (props) => {

    const handleClick=()=>{
        props.onButtonClick(props.id);
        alert("Item Added to Cart")
    }
        

    

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={props.img} alt="" />
            </div>

            <div className="product-info">
                <p className="product-title">{props.title}</p>
                <p className="product-volume">{}</p>
            </div>

            <div className="product-price-div">
                <p className="product-price">{props.price} <del>₹{props.oldPrice}</del></p>

                <p className='product-offer'>{props.offer}% off</p>
            </div>

            <div className="rating-review-div">
                <p className="rating">⭐⭐⭐⭐<span>116 reviews</span></p>

            </div>

            <div className="comment-wishlist-div">
                <p className="comment">Free Delivery</p>
                <FaRegHeart size={25} />
            </div>

            <div className="cart-btn">
                <button onClick={handleClick} style={{cursor:"pointer"}}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card
