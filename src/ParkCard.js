import React from "react"
import ImageSlider from "./ImageSlider.js"
import {SliderData} from './SliderData.js';
import GoogleRating from './GoogleRating';
import DistanceCounter from './DistanceCounter';
import { FaMountain } from "react-icons/fa";
import './ParkCard.css';


const ParkCard = (parkInfo) => {

  if (parkInfo===null) {
    return null
  }

  const park = parkInfo.parkInfo
  const index = parkInfo.parkNum
  console.log('ParkCard!')
  console.log(park)
  console.log(index)

  const renderCard = () => {
      return (
        <ImageSlider slides={park.photos}/>
      )
  }

  return (
    <div style={{marginBottom: 200}}>
        <div className='parkName'>{<FaMountain style={{marginRight:50}}/>} Park {index}: {park.name}, {park.state}
          {<FaMountain style={{marginLeft:50}}/>}
        </div>
        <GoogleRating rating={park.rating} numRatings={park.num_reviews}></GoogleRating>
        {renderCard()}
        <div style={{marginTop: 50}}>
          <DistanceCounter distance={park.next_distance} units={'km'}>
            </DistanceCounter>
        </div>
    </div>
  );
}

export default ParkCard;