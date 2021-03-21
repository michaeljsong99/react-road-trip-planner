import './App.css';
import CityCard from './CityCard.js';
import ParkCard from './ParkCard.js';
import InputCard from './InputCard.js'
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';
import {Button} from "react-bootstrap";
import React, {useState} from 'react'

function App() {

  var string0 = 'Hey there!'
  var string1 = 'This site is designed to generate your dream road trip!'
  var string3 = 'With 200+ National Park Sites across the U.S., the possibiliities are endless!'
  var string2 = 'To get started, select your configurations in the input panel below.'

  const milesToKm = 1.60934;

  // Set State Variables
  const [startingCity, setStartingCity] = useState('Randomize');
  const [maxDistance, setMaxDistance] = useState(null);
  const [units, setUnits] = useState('mi');
  const [isFetching, setIsFetching] = useState(false);
  const [path, setPath] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const updateStartingCity = (city) => {
    setStartingCity(city);
    console.log('Starting City: ' + city)
  }

  const updateMaxDistance = (distance) => {
    setMaxDistance(distance);
    console.log('Max Distance: ' + String(distance));
  }

  const updateUnits = (units) => {
    setUnits(units);
    console.log('Units: ' + units);
  }

  const validateInput = (maxDistanceString) => {
    if (maxDistance===null) {
      alert("Distance field must be filled!");
      return false;
    }
    let isNum = /^\d+$/.test(maxDistanceString);
    if (isNum) {
      return true;
    }
    alert("Distance field must be filled with only contain numeric characters!");
    return false;
  }

  // API Call to get the road trip.
  const fetchRoadTrip = async (city, distance) => {
    setIsFetching(true);
    const url = `/api?start_city=${city}&max_distance=${distance}`
    console.log(url)
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    setIsFetching(false);
    var apiResult = {
      'path': [],
      'errorMsg': null
    }
    if (result['result'] === 'ok') {
      // A path was found.
      apiResult['path'] = result['path'];
    }
    else {
      apiResult['errorMsg'] = result['result']
    }
    return apiResult;
  };

  const submitButtonAction = async () => {
    if (validateInput(maxDistance)) {
      var distance = parseInt(maxDistance, 10);
      // Since all the distances in the server are in km, may need to convert.
      if (units === 'mi') {
        distance *= milesToKm;
      }
      const apiResult = await fetchRoadTrip(startingCity, distance);
      const roadTripPath = apiResult['path']
      const errorMessage = apiResult['errorMsg']
      if (roadTripPath.length > 0) {
        // Need to update the props of the cities and parks.
        const startCity = roadTripPath[0]
        const endCity = roadTripPath[-1]
        const parks = roadTripPath.slice(1, -1);
      }
      else {
        alert(errorMessage + "\n" + "Please try increasing the maximum distance.");
      }
    }
  }

  return (
    <div className="App">
        <Button className="App-resetButton">Reset</Button>
        <div className="App-typewriter">
          <Typewriter
            options={{
              strings: [string0, string1, string2, string3],
              autoStart: true,
              loop: true,
              delay: 10,
              deleteSpeed: 10,
              pauseFor: 2000,
            }}
          />
        </div>
        <Zoom>
          <InputCard 
            updateCity={updateStartingCity} 
            updateDistance={updateMaxDistance} 
            updateUnits={updateUnits}
            submitAction={submitButtonAction}>
          </InputCard>
        </Zoom>
        <Zoom>
          <CityCard type='Starting'></CityCard>
          <ParkCard></ParkCard>
          <ParkCard></ParkCard>
          <ParkCard></ParkCard>
          <CityCard type='Ending'></CityCard>
        </Zoom>
    </div>
  );
}


export default App;
