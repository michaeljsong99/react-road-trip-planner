import React from "react"
import DistanceCounter from './DistanceCounter';
import { FaMapMarkerAlt } from "react-icons/fa";
import './CityCard.css'

const CityCard = ({type}) => {

    const ending = (type==='Ending') ? true : false

    return (
      <div style={{marginBottom: 200}}>
          <div className='cityName'>{<FaMapMarkerAlt style={{marginRight:50}}/>} {type} City: San Francisco, CA 
            {<FaMapMarkerAlt style={{marginLeft:50}}/>}    </div>
          <div style={{marginTop: 50}}>
            <DistanceCounter distance={1000} units={'km'} total={ending}>
              </DistanceCounter>
          </div>
      </div>
    );
  }
  
export default CityCard;