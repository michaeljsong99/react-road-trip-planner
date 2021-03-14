import React from "react"
import {Card, Button} from "react-bootstrap"
import ImageSlider from "./ImageSlider.js"
import {SliderData} from './SliderData.js';


const ParkCard = () => {

  const renderCard = () => {
      return (
        <ImageSlider slides={SliderData}/>
      )
  }

  return (
    <div>
        {renderCard()}
    </div>
  );
}

export default ParkCard;