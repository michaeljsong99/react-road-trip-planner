import React from "react"
import DistanceCounter from './DistanceCounter';
import { FaMapMarkerAlt } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';
import './CityCard.css'

const CityCard = ({type, cityObject}) => {

    if (cityObject === null) {
        return null;
    }
    const ending = (type==='Ending') ? true : false
    const cityName = cityObject['name']
    const distance = cityObject['next_distance']
    return (
      <Zoom>
      <div style={{marginBottom: 200}}>
          <div className='cityName'>{<FaMapMarkerAlt style={{marginRight:50}}/>} {type} City: {cityName}
            {<FaMapMarkerAlt style={{marginLeft:50}}/>}    </div>
          <div style={{marginTop: 50}}>
            <DistanceCounter distance={distance} units={'km'} total={ending}>
              </DistanceCounter>
          </div>
      </div>
      </Zoom>
    );
  }
  
export default CityCard;