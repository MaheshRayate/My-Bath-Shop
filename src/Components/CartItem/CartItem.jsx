import React,{useState} from 'react';
import "./CartItem.css";

const CartItem = (props) => {
  const [count, setCount] = useState(1);

  const handleDeleteClick=()=>{
    props.onPressDelete(props.id);
  }
  return (
    <div className="cart-item">
      <input type="checkbox" name="" id="" />
      <div className="content-div">

        <div className="hero-img-container">
          <img src={props.img} alt="" />
        </div>
        <div className="product-info-div">
          <h3>{props.title}</h3>
          <div className="price-del-off">
            <p className="price">Price: <span>₹{props.price}</span></p>
            <del>₹{props.oldPrice}</del>
            <p className="off">{props.offer}% off</p>
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

            <div className="qty-share-delete-div">
              <div className="item-quantity-div">
                <button onClick={() => { (count > 1) ? setCount(count - 1) : setCount(1) }}>-</button>
                <span>{count}</span>
                <button onClick={() => { setCount(count + 1) }}>+</button>
              </div>
              <div>
                <button className="cart-btns" onClick={handleDeleteClick}>Delete</button>
                <button className="cart-btns">Move To Wishlist</button>
                <button className="cart-btns">Share</button>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default CartItem
