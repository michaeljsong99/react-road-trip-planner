import React from "react"
import ImageSlider from "./ImageSlider.js"
import {SliderData} from './SliderData.js';
import GoogleRating from './GoogleRating';
import DistanceCounter from './DistanceCounter';
import { FaMountain } from "react-icons/fa";
import './ParkCard.css';


const ParkCard = () => {

  const renderCard = () => {
      return (
        <ImageSlider slides={SliderData}/>
      )
  }

  return (
    <div style={{marginBottom: 200}}>
        <div className='parkName'>{<FaMountain style={{marginRight:50}}/>} National Park 1, CA
          {<FaMountain style={{marginLeft:50}}/>}
        </div>
        <GoogleRating rating={4.7} numRatings={7800}></GoogleRating>
        {renderCard()}
        <div style={{marginTop: 50}}>
          <DistanceCounter distance={1000} units={'km'}>
            </DistanceCounter>
        </div>
    </div>
  );
}

export default ParkCard;