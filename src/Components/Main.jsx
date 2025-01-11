import React,{useRef} from 'react';
import { FaAngleLeft, FaArrowLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Main = () => {

    const topBrandRef = useRef(null);
    const topCategories=useRef(null);
    const topConcerns=useRef(null);
    const topBodyCare=useRef(null);
    const topHairCare=useRef(null);
    const topAccessories=useRef(null);
    

    function handleScrollNxt() {
        if (topBrandRef.current) {
            topBrandRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    }

    function handleScrollPrev() {
        if (topBrandRef.current) {
            topBrandRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    }


    function handleScrollNxt2() {
        if (topCategories.current) {
            topCategories.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }

    function handleScrollPrev2() {
        if (topCategories.current) {
            topCategories.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    }

    function handleScrollNxt3() {
        if (topConcerns.current) {
            topConcerns.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    }

    function handleScrollPrev3() {
        if (topConcerns.current) {
            topConcerns.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    }

    function handleScrollNxt4() {
        if (topBodyCare.current) {
            topBodyCare.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    }

    function handleScrollPrev4() {
        if (topBodyCare.current) {
            topBodyCare.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    }

    function handleScrollNxt5() {
        if (topAccessories.current) {
            topAccessories.current.scrollBy({ left: 240, behavior: "smooth" });
        }
    }

    function handleScrollPrev5() {
        if (topAccessories.current) {
            topAccessories.current.scrollBy({ left: -240, behavior: "smooth" });
        }
    }

    function handleScrollNxt6() {
        if (topHairCare.current) {
            topHairCare.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    }

    function handleScrollPrev6() {
        if (topHairCare.current) {
            topHairCare.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    }

  return (
    <div className="main">
        <div className="main-subcontainer ">
            <h1 className="main-subcontainer-title">OUR TOP BRANDS</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-brands" ref={topBrandRef}>
                
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\dot&key.png" alt="dot&key" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\aqualogica.png" alt="aqualogica" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\nivea_new.png" alt="nivea_new" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\plum_new.png" alt="plum_new" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\himalaya_new.png" alt="himalaya_new" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\cetaphil_new.png" alt="cetaphil_new" /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\pears1.jfif" alt="pears" className='square-img'/></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\vaseline.jfif" alt="vaseline" className='square-img' /></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\loreal2.png" alt="loreal" className='square-img'/></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\dove.jpg" alt="dove" className='square-img'/></a></div>
                    <div className="top-brands-item"><a href=""><img src="public\BrandLogos\lakme.png" alt="lakme" className='square-img' /></a></div>
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt} style={{cursor:"pointer"}}/>
            </div>
        </div>

        <div className="main-subcontainer">
        <h1 className="main-subcontainer-title">SHOP BY CATEGORY</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev2} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-categories" ref={topCategories}>
                    <div className="category-item"><Link to="/view-all"><img src="src\assets\CategoryImages\bath_new.png" alt="bath" /></Link><p>Bath</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\travel_new.png" alt="travel" /></a><p>Travel Minis</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\body_new.png" alt="body" /></a><p>Body</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\mom_baby.png" alt="mom&baby" /></a><p>Mom & Baby</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\hand_care.png" alt="handcare" /></a><p>Hand Care</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\hair.jpg" alt="hair" /></a><p>Hair Care</p></div>
                    <div className="category-item"><a href=""><img src="src\assets\CategoryImages\men.jpg" alt="men" /></a><p>Men</p></div> 
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt2} style={{cursor:"pointer"}}/>
            </div>

        </div>
        <div className="main-subcontainer">
        <h1 className="main-subcontainer-title">SHOP BY CONCERN</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev3} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-concerns"  ref={topConcerns}>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\dryness_new.png" alt="dryness" /></a><p>Dryness</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\acne_new.png" alt="acne_new" /></a><p>Acne Prone</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\dandruff_new.png" alt="dandruff_new" /></a><p>Dandruff</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\sundamage_new.png" alt="sundamage_new" /></a><p>Sun Damage</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\hairfall_new.png" alt="hairfall_new" /></a><p>Hairfall</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\hyperpigmentation.png" alt="hyperpigmentation" /></a><p>Hyperpigmentation</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\oily.webp" alt="oily" className='square-img'/></a><p>Oilyness</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\blackhead.jpg" alt="blackhead" className='square-img' /></a><p>Black Heads</p></div>
                    <div className="concern-item"><a href=""><img src="src\assets\Concern\hairthinning.jpg" alt="hairthinning" className='square-img'/></a><p>Hair Thinning</p></div>
                    
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt3} style={{cursor:"pointer"}}/>
            </div>

        </div>

        <div className="main-subcontainer" >
        <h1 className="main-subcontainer-title">UPTO 60% OFF</h1>
            <div className="offer-container-outer">
                <p className="view-all"><Link to="/view-all"><p>View All <span><FaAngleRight/></span></p></Link></p>
                <div className="offer-container-inner">
                    <Link to="/product">
                    <div className="offer-items">
                        <img src="src\assets\Offer\offer1.png" alt="" />
                        <p>Dot & Key 10% Vitamin C + E Super Bright Face Serum 30 mL</p>
                        <div className='price-wishlist-div special'>
                            <div>
                                <p style={{fontWeight:"bold"}} className='price'>Price:₹556</p>
                                <p>⭐⭐⭐⭐  <span style={{fontSize:"12px"}}>116 reviews</span></p>
                            </div>
                            <div className="wishlist">
                                <IoMdHeartEmpty color='red' size={30} style={{position:"absolute", left:"15px", top:"15px"}}/>
                            </div>
                        </div>
                    </div>
                    </Link>
                    
                    <Link to="/product">
                    <div className="offer-items">
                        <img src="src\assets\Offer\offer2.png" alt="" />
                        <p>Dr. Sheth’s Neem & Salicylic Acid Body Wash For Body Acne-250 mL</p>
                        <div className='price-wishlist-div special'>
                            <div>
                                <p style={{fontWeight:"bold"}} className='price'>Price:₹349</p>
                                <p>⭐⭐⭐⭐⭐ <span style={{fontSize:"12px"}}>78 reviews</span></p>
                            </div>
                            <div className="wishlist">
                                <IoMdHeartEmpty color='red' size={30} style={{position:"absolute", left:"15px", top:"15px"}}/>
                            </div>
                        </div> 
                    </div>
                    </Link>
                    
                    <Link to="">
                    <div className="offer-items">
                        <img src="src\assets\Offer\offer3.png" alt="" />
                        <p>Love Beauty & Planet Argan Oil and Lavender Sulfate Free Smooth and Serene Shampoo</p>
                        <div className='price-wishlist-div'>
                            <div>
                                <p style={{fontWeight:"bold"}} className='price'>Price:₹487</p>
                                <p>⭐⭐⭐⭐  <span style={{fontSize:"12px"}}>61 reviews</span></p>
                            </div>
                            <div className="wishlist">
                                <IoMdHeartEmpty color='red' size={30} style={{position:"absolute", left:"15px", top:"15px"}}/>
                            </div>
                        </div>
                    </div>
                    </Link>
                    
                    <Link to="">
                    <div className="offer-items">
                        <img src="src\assets\Offer\offer4.png" alt="" />
                        <p> Mamaearth Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml</p>
                        <div className='price-wishlist-div'>
                            <div>
                                <p style={{fontWeight:"bold"}} className='price'>Price:₹349</p>
                                <p>⭐⭐⭐⭐  <span style={{fontSize:"12px"}}>65 reviews</span></p>
                            </div>
                            <div className="wishlist">
                                <IoMdHeartEmpty color='red' size={30} style={{position:"absolute", left:"15px", top:"15px"}}/>
                            </div>
                        </div>
                    </div>
                    </Link> 
                    
                </div>
                
            </div>
        </div>

        <div className="main-subcontainer">
        <h1 className="main-subcontainer-title">EXPLORE BODYCARE</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev4} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-bodyCare" ref={topBodyCare}>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body1.png" alt="" /></a><p>Body Oil</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body2.png" alt="" /></a><p>Moisturizer</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body3.png" alt="" /></a><p>Body Scrub</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body4.png" alt="" /></a><p>Body Serum</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body5.png" alt="" /></a><p>Soap</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body3.png" alt="" /></a><p>Hair Care</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreBody\body1.png" alt="" /></a><p>Men</p></div> 
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt4} style={{cursor:"pointer"}}/>
            </div>


        </div>

        <div className="main-subcontainer">
        <h1 className="main-subcontainer-title">EXPLORE HAIRCARE</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev6} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-hairCare" ref={topHairCare}>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair1.png" alt="" /></a><p>Shampoo</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair2.png" alt="" /></a><p>Hair Oil</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair3.png" alt="" /></a><p>Conditioner</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair4.png" alt="" /></a><p>Hair Serum</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair5.png" alt="" /></a><p>Hair Mask</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair3.png" alt="" /></a><p>Conditioner</p></div>
                    <div className="bodyCare-item"><a href=""><img src="src\assets\ExploreHair\hair1.png" alt="" /></a><p>Shampoo</p></div> 
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt6} style={{cursor:"pointer"}}/>
            </div>
        </div>

        <div className="main-subcontainer">
        <h1 className="main-subcontainer-title">EXPLORE ACCESSORIES</h1>
            <div className="main-subcontainer-outer">
                <FaAngleLeft size={30} onClick={handleScrollPrev5} style={{cursor:"pointer"}}/>
                <div className="main-subcontainer-inner" id="top-accessories" ref={topAccessories}>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory1.png" alt="" /></a><p>Bath Brush</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory2.png" alt="" /></a><p>Shower Cap</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory3.png" alt="" /></a><p>Loofah</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory4.png" alt="" /></a><p>Towel</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory5.png" alt="" /></a><p>Exfoliating Tools</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory1.png" alt="" /></a><p>Bath Brush</p></div>
                    <div className="accesories-item"><a href=""><img src="src\assets\Accessories\accessory3.png" alt="" /></a><p>Loofah</p></div> 
                </div>
                <FaAngleRight size={30} onClick={handleScrollNxt5} style={{cursor:"pointer"}}/>
            </div>
        </div>

        <div className="main-subcontainer">
            <div className="main-subcontainer-outer spotlight-container">
                <div className="left">
                    <h3 className='spotlight-main-title'>IN THE SPOTLIGHT</h3>
                    <img src="https://i.pinimg.com/originals/8e/15/03/8e15030a8d924b2988362e622efbd4c0.gif" alt="" className="spotlight-title-img" />
                </div>
                <div className="right">
                    <FaAngleLeft size={30}/>
                    <div className="right-inner">
                        <h3>TRENDING BESTSELLER</h3>
                        <div className="right-inner-flex">
                            <div className="right-item">
                                <img src="src\assets\Spotlight\spotlight2.png" alt="" />
                                <p className='spotlight-info'>Plum Green Tea Pore Cleansing Face Wash 75mL</p>
                                <p className='spotlight-price'>₹224</p>
                                <button className="spotlight-btn">ADD TO CART</button>
                                <FaRegHeart style={{position:"absolute",top:"12px",right:"10px"}} size={20}/>
                            </div>
                            <div className="right-item">
                                <img src="src\assets\Spotlight\spotlight3.png" alt="" />
                                <p className='spotlight-info'>The Face Shop Smart Peeling Honey Black Sugar Scrub</p>
                                <p className='spotlight-price'>₹842</p>
                                <button className="spotlight-btn">ADD TO CART</button>
                                <FaRegHeart style={{position:"absolute",top:"12px",right:"10px"}} size={20}/>
                            
                            </div>
                            <div className="right-item">
                                <img src="src\assets\Spotlight\spotlight4.png" alt="" />
                                <p className='spotlight-info'>Lotus Organics Hair Fall Control Multi Herbs Oil - 200ml </p>
                                <p className='spotlight-price'>₹652</p>
                                <button className="spotlight-btn">ADD TO CART</button>
                                <FaRegHeart style={{position:"absolute",top:"12px",right:"5px"}} size={20} />
                            </div>

                        </div>
                        
                    </div>
                    <FaAngleRight size={30}/>

                </div>
            </div>
        </div>

        <div className="main-subcontainer">
            <div className="main-subcontainer-outer  prefooter">
                <div className="prefooter-items">
                    <img src="src\assets\prefooter\freeshipping_new.png" alt="" />
                    <h2 className="prefooter-title">Free Shipping</h2>
                    <p className="prefooter-info">Above ₹500</p>

                </div>
                <div className="prefooter-items">
                    <img src="src\assets\prefooter\easy_returns.png" alt="" />
                    <h2 className="prefooter-title">7 Days Easy</h2>
                    <p className="prefooter-info">Return</p>
                    
                </div>
                <div className="prefooter-items">
                    <img src="src\assets\prefooter\authentic.png" alt="" />
                    <h2 className="prefooter-title">100% Authentic</h2>
                    <p className="prefooter-info">Products</p>
                    
                </div>
                <div className="prefooter-items">
                    <img src="src\assets\prefooter\100+.png" alt="" />
                    <h2 className="prefooter-title">100+Brands</h2>
                    <p className="prefooter-info">1 Lakh Products</p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Main;
