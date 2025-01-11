import React from 'react';
import "../Styles/addreview.css";
import { useState } from 'react';
import { FaStar } from "react-icons/fa";


const AddReview = () => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review,setReview]=useState(undefined);
  return (
    <div className='add-review-container'>
      <h2 className="review-title">Add a review</h2>
      <div className="product-name-div">
        <img src="src/assets/productPageAssets/product1.png" alt="" />
        <h2 style={{fontSize:"20px"}}>Dr. Sheth's Neem & Salicylic Acid Body Wash for Body Acne</h2>
      </div>

      <form action="">
        <div className="star-rating-div">
          {[...Array(5)].map((star, index) => {
            const currRating = index + 1;

            return (
              <label key={index}>
                <input type="radio"
                  name="rating"
                  value={currRating}
                  onClick={() => { setRating(currRating), console.log("Rating is ", currRating) }}
                  style={{ visibility: "hidden" }} />
                <FaStar
                  size={30}
                  key={index}
                  className="star"
                  color={currRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => { setHover(currRating) }}
                  onMouseLeave={() => { setHover(null) }}
                />
              </label>
            )
          })}

        </div>
        <div><textarea name="" id="" placeholder='Add your Review' className='review-txtarea' rows="5" cols="100" onChange={(e)=>{setReview(e.target.value); console.log(review)}} value={review}></textarea></div>
        <button type="submit" onClick={()=>{console.log(review)}}>Submit</button>
      </form>



    </div>
  )
}

export default AddReview
