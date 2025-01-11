import React,{useState,useEffect,useRef} from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import CarouselData from '../Data/CarouselData';

const Carousel = () => {

    const [currImgIdx,setCurrImgIdx]=useState(0);
    const idx = useRef(0);

    function handlePrevious(){
        if(currImgIdx===0){
            setCurrImgIdx(4);
        }

        else{
            setCurrImgIdx(currImgIdx-1);
        }

    }

    function handleNext(){
        if(currImgIdx===4){
            setCurrImgIdx(0);
        }

        else{
            setCurrImgIdx(currImgIdx+1);
        }

    }

    function handleBtnPress(index){
        setCurrImgIdx(index);
        // idx=index;


    }

    useEffect(() => {
    //   setTimeout(() => {
    //     if(currImgIdx===4)
    //     {
    //         setCurrImgIdx(0);
    //     }
    //     else{
    //         setCurrImgIdx(currImgIdx+1);

    //     }
        
        
    //   }, 6000);
    
      
    }, [currImgIdx])
    
  return (
    <div className='carousel'>
        <FaAngleLeft size={30} onClick={handlePrevious} style={{position:"absolute", left:"0",top:"185px", cursor:"pointer"}}/>
        {CarouselData.map((img,index)=>{
            return(
                <img src={img.src} alt="Carousel Img" key={index} className={currImgIdx===index?"hero-pic":"hero-pic hide-hero-pic"}/>
            )
        })}

        <FaAngleRight size={30} onClick={handleNext} style={{position:"absolute", right:"0", top:"185px", cursor:"pointer"}} />
        <span className="circle-indicators">
        {CarouselData.map((img,index)=>{
            return(
                <button key={index} id={index} className={currImgIdx===index?"current-btn":"light-current-btn"} onClick={()=>handleBtnPress(index)}></button>
            )
        })}

        </span>
        
    
      
    </div>
  )
}

export default Carousel
