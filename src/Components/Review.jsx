import React from 'react';
import "../Styles/Review.css"


const Review = (props) => {
    return (
        <div className="review-main">
            <div className="photo-star-div">
                <img src={props.img} alt="" />
                <p>⭐⭐⭐⭐</p>
                </div>
                <div className="title-desc">
                    <h2>{props.title}</h2>
                    <p>inctio is Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus nesciunt quasi velit optio suscipit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, assumenda. tenetur molestias iste esse cupiditate. quam, rem quod minima maiores sed numquam sapiente!</p>
                </div>
            
        </div>
    )
}

export default Review;
