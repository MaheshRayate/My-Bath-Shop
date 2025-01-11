import React, { useState } from 'react';
import "../Styles/productpage.css"
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Review from './Review';
import { Link } from 'react-router-dom';

const ProductPage = () => {

  let currImgIdx = 1;
  const [currIdx, setCurrIdx] = useState(1);
  const [qty, setQty] = useState(1);


  let imgAddress = `ProductPageAssets/Bigproduct${currIdx}.png`
  return (
    <div className='product-page-container'>
      <div className="product-page-container-top">
        <div className="product-page-left">

          <div className="product-page-left-top">
            <div className="img-div">
              <img src="ProductPageAssets/product1.png" alt="" onMouseEnter={() => { setCurrIdx(1) }} onMouseLeave={() => { setCurrIdx(1) }} />
              <img src="ProductPageAssets/product2.png" alt="" onMouseEnter={() => { setCurrIdx(2) }} onMouseLeave={() => { setCurrIdx(1) }} />
              <img src="ProductPageAssets/product3.png" alt="" onMouseEnter={() => { setCurrIdx(3) }} onMouseLeave={() => { setCurrIdx(1) }} />
              <img src="ProductPageAssets/product4.png" alt="" onMouseEnter={() => { setCurrIdx(4) }} onMouseLeave={() => { setCurrIdx(1) }} />
            </div>

            <div className="spotlight-img-div">
              <img src={imgAddress} alt="" />
              <div className="buttons-div">
                <button style={{ backgroundColor: "#EAA525" }}>ADD TO CART</button>
                <button style={{ backgroundColor: "#E5845B" }}>BUY NOW</button>
              </div>
            </div>
          </div>

          <div className="tags-div">
            <div>
              <img src="ProductPageAssets/tag1.png" alt="" />
              <p>Parabean free</p>
            </div>

            <div>
              <img src="ProductPageAssets/tag2.png" alt="" />
              <p>No Fragrance</p>
            </div>

            <div>
              <img src="ProductPageAssets/tag3.png" alt="" />
              <p>Vegan Free</p>
            </div>

            <div>
              <img src="ProductPageAssets/tag4.png" alt="" />
              <p>No Synthetic Dyes</p>

            </div>



          </div>

        </div>
        <div className="product-page-right">
          <h2>Dr. Sheth's Neem & Salicylic Acid Body Wash for Body Acne | Anti-bacterial AHA BHA Body Wash | 2% Lactic Acid, 1% Salicylic Acid & Neem Extract | Suits All Skin Types | Men & Women | 250 mL</h2>
          <div className="product-rating-div">
            <p><span>4.4☆</span> 7856 Ratings and 660 Reviews</p>
          </div>

          <div className="concerns-div">
            <p style={{ backgroundColor: "#FFD587" }}>Reduce Body Acne</p>
            <p style={{ backgroundColor: "#FFE75E" }}>For All Skin Type</p>
            <p style={{ backgroundColor: "#FEC28D" }}>Anti-Bacterial</p>
            <p style={{ backgroundColor: "#D4CEA8" }}>Salicyclic Acid</p>
          </div>

          <div className="price-div">
            <h2>Price:₹349 <span> ₹246</span> <span id="offer">12% off</span></h2>
            <p>inclusive of all taxes</p>
          </div>

          <h3>Quantity</h3>
          <div className="quantity-div">
            <div className="quantity-box">
              <button>250 ml</button>
              <button>400 ml</button>
            </div>

            <div className="quantity-selector">
              <button style={{ color: "black", border: "1px solid grey" }} onClick={() => { (qty > 1) ? setQty(qty - 1) : setQty(1) }}>-</button>
              <p>{qty}</p>
              <button style={{ color: "white", backgroundColor: "#DB4444", border: "none" }} onClick={() => { setQty(qty + 1) }}>+</button>
            </div>
          </div>

          <div className="specifications-div">
            <h2>SPECIFICATIONS</h2>
            <div className="specifications-list">
              <div className="specifications-parameters">
                <p>Skin Type</p>
                <p>Ingredients</p>
                <p>Product Benefits</p>
                <p>Special Features</p>
                <p>Use For</p>
                <p>Brand</p>
              </div>
              <div className="specifications-parameters-answer">
                <p>All, Oily, Sensitive</p>
                <p>Neem & Salicyclic Acid</p>
                <p>Cleansing</p>
                <p>Antibacterial</p>
                <p>Body</p>
                <p>Dr.Sheths</p>

              </div>

            </div>
          </div>

          <div className="offer-section">
            <div className='offer-title-div'>
              <h3>BEST OFFERS </h3>
              <BiSolidOffer size={20} />
            </div>

            <div className='offers-div'>
              <li>Applicable on: Orders above Rs. 749 (only on first purchase)</li>
              <li>Combo Offer Buy 2 items save 5%; Buy 3 or more save 7%</li>
              <li>10% Discount on ICICI Bank Credit and Debit Cards <a href="">See More</a></li>

            </div>
          </div>

          <div className="delivery-section">
            <div className="delivery-title-div">
              <h3>DELIVERY</h3>
              <CiDeliveryTruck size={30} />
            </div>

            <div className='pincode-div'>
              <MdLocationPin size={20} />
              <p>Enter Delivery Code</p>
              <button>CHECK</button>
            </div>
          </div>

          <div className="description-div">
            <h3>DESCRIPTION</h3>
            <p>Choose brighter days for your skin every morning with Dr Sheth’s Ceramide & Vitamin C Body Wash! Loaded with skin-brightening Vitamin C & ultra-moisturizing Ceramide Complex, this gentle yet effective daily-use body wash deeply cleanses dirt & sebum while sealing in a long-lasting layer of nourishment over the skin. What’s more? The formula foams into a strong lather that doesn’t dry the skin & gives it a super soft & even look with every wash!</p>
          </div>

          <div className="ingredients-div">
            <h3>ABOUT INGREDIENTS</h3>
            <p>A beta-hydroxy acid (BHA) that can help treat acne, psoriasis, dandruff, and other skin conditions. It works by exfoliating the skin, reducing swelling and redness, and unclogging pores. Salicylic acid is available in many forms, including gels, creams, lotions, and soaps.</p>
          </div>



        </div>


      </div>

      <div className="related-products-div">
        <h2 className="related-products-title">RELATED PRODUCTS</h2>
        <div className="related-main-box">
          <a href="">View All <FaArrowRightLong /></a>
          <div className="related-products-flex-box">
            <div className="related-products-item">

              <img src="ProductPageAssets/0.png" alt="" />
              <div className="product-info">
                <p className="prod-title">Dove Deeply Nourishing Body Wash, With Exfoliating Beads For Softer, Smoother Skin, 800 ml</p>

                <div className="price-offer">
                  <span className="prod-price">₹495</span> <span className="old-price">₹𝟻̶𝟸̶𝟶̶</span> <span className="offer">5% off</span>
                </div>

                <div className='rating-reviews'>
                  <p className="prod-rating">⭐⭐⭐⭐</p>
                  <span className="reviews">116 reviews</span>
                </div>

              </div>

            </div>
            <div className="related-products-item">

            <img src="ProductPageAssets/1.png" alt="" />
              <div className="product-info">
                <p className="prod-title">Deconstruct 1% Salicylic Acid Body Wash with 2% Glycolic Acid |  Shower gel for Women & Men- 200ml</p>

                <div className="price-offer">
                  <span className="prod-price">₹321</span> <span className="old-price">₹𝟹̶𝟺̶𝟿̶</span> <span className="offer">8% off</span>
                </div>

                <div className='rating-reviews'>
                  <p className="prod-rating">⭐⭐⭐⭐⭐</p>
                  <span className="reviews">225 reviews</span>
                </div>

              </div>

            </div>

            <div className="related-products-item">
            <img src="ProductPageAssets/2.png" alt="" />
              <div className="product-info">
                <p className="prod-title">Love Beauty & Planet Argan Oil and Lavender Sulfate Free Smooth and Serene Shampoo</p>

                <div className="price-offer">
                  <span className="prod-price">₹546</span> <span className="old-price">₹𝟼̶𝟻̶𝟶̶</span> <span className="offer">16% off</span>
                </div>

                <div className='rating-reviews'>
                  <p className="prod-rating">⭐⭐⭐⭐</p>
                  <span className="reviews">190 reviews</span>
                </div>

              </div>

            </div>

            <div className="related-products-item">

            <img src="ProductPageAssets/3.png" alt="" />
              <div className="product-info">
                <p className="prod-title"> Mamaearth Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 600ml</p>

                <div className="price-offer">
                  <span className="prod-price">₹749</span> <span className="old-price">₹𝟾̶𝟼̶𝟷̶</span> <span className="offer">25% off</span>
                </div>

                <div className='rating-reviews'>
                  <p className="prod-rating">⭐⭐⭐⭐</p>
                  <span className="reviews">116 reviews</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="product-info-section">
        <h2 className='product-info-title'>Product Information</h2>
        <div className="product-info-list">
          <div className="prod-info-list-column"><li>Country of Origin</li><li>India</li></div>
          <div className="prod-info-list-column"><li>Item part number</li><li>DSFP1158</li></div>
          <div className="prod-info-list-column"><li>Product Code</li><li></li></div>
          <div className="prod-info-list-column"><li>Manufacturer Details</li><li></li></div>
          <div className="prod-info-list-column"><li>Net Of Quantity</li><li>250ml</li></div>
          <div className="prod-info-list-column"><li>Item Weight</li><li>250g</li></div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-title-div">
          <div className="review-title-left">
            <h2>Our Customer Feedback</h2>
            <h3>Don't take our word for it. Trust Our Customers</h3>
          </div>
          <Link to="/addreview"><button className="add-review">ADD REVIEW</button></Link>
          
        </div>

        <div className="review-container">
          <Review 
          title="Floyd Miles"
          img="Review/user1.png"
          />
          <Review title="Adam Gily"
          img="Review/user2.png"
          />
          
        </div>
      </div>

    
    </div>
  )
}

export default ProductPage;
