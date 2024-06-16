import React from 'react'
import image1 from "../Assets/img1.webp";
import image2 from "../Assets/img2.webp";
import image3 from "../Assets/img3.png";
import video from "../Assets/bg1.mp4";
import "./background.css"


export default function background({palyStatus,heroCount}) {

    if (palyStatus){
        return  <video src={video} loop muted autoPlay ></video>
    }else if (heroCount === 0){
        return <img className='images' src={image1} alt="" />
    }else if (heroCount === 1){
        return  <img className='images' src={image2} alt="" />
    }else if (heroCount === 2){
        return  <img className='images' src={image3} alt="" />
    }

}
