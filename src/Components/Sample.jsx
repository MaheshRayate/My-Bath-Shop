import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const Sample = () => {

    const [Products, setProducts] = useState([]);

    
    useEffect(() => {
        let products=[];

        async function fetchData(){
            try{
                const response=await axios.get("https://dummyjson.com/products");
                console.log(response.data.products);
                products=response.data.products;

                let RealProducts=[];
                for(let i=0;i<10;i++)
                {
                    RealProducts.push(...products);
                }

                console.log(RealProducts);
                setProducts(RealProducts);

    
            }catch(error){
                console.error('There was an error making the GET request:', error);
            }
        }

        fetchData();

    }, [])

  return (
    <div className="Sample-container">
        {Products.map((product,index)=>{
            return(
                <div className="product-item">
                    <div className="product-img-div">
                        <img src={product.images[0]} alt="dove-img" className='product-img' />
                    </div>

                    <div className="rating-div">
                        <p>4.5</p>
                        <MdOutlineStarPurple500 style={{color:"rgb(55, 126, 167)"}} />
                    </div>

                    <p className="product-title">{product.title}</p>
                    <p className="product-desc">{product.description.slice(0,25)}</p>
                    <p className="product-price">$. {product.price}</p>
                    <button className="product-btn">Add to Cart</button>
                    <IoIosHeartEmpty style={{position:'absolute', top:"5px", right:"5px" ,color:"black"}}  size={20} className="heart"/>
                </div>
            )
            

        })

        }
      
    </div>
  )
}

export default Sample
