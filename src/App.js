import './App.css';
import CityCard from './CityCard.js';
import ParkCard from './ParkCard.js';
import ParkContainer from './ParkContainer.js'
import InputCard from './InputCard.js'
import Typewriter from 'typewriter-effect';
import {Button} from "react-bootstrap";
import {milesToKm} from "./Utils.js";
import React, {useState} from 'react'

function App() {

  var string0 = 'Hey there!'
  var string1 = 'This site is designed to generate your dream road trip!'
  var string3 = 'With 200+ National Park Sites across the U.S., the possibiliities are endless!'
  var string2 = 'To get started, select your configurations in the input panel below.'

  // all available cities.
  const cities = [
    'Randomize',
    'Albuquerque, NM',
    'Anaheim, CA',
    'Anchorage, AK',
    'Atlanta, GA',
    'Austin, TX',
    'Baltimore, MD',
    'Boise, ID',
    'Boston, MA',
    'Buffalo, NY',
    'Charlotte, NC',
    'Chicago, IL',
    'Cincinnati, OH',
    'Cleveland, OH',
    'Columbus, OH',
    'Dallas, TX',
    'Denton, TX',
    'Denver, CO',
    'Des Moines, IA',
    'Detroit, MI',
    'Henderson, NV',
    'Honolulu, HI',
    'Houston, TX',
    'Indianapolis, IN',
    'Jacksonville, FL',
    'Juneau, AK',
    'Kansas City, MO',
    'Las Vegas, NV',
    'Lexington, KY',
    'Little Rock, AR',
    'Long Beach, CA',
    'Los Angeles, CA',
    'Louisville, KY',
    'Madison, WI',
    'Memphis, TN',
    'Miami, FL',
    'Milwaukee, WI',
    'Minneapolis, MN',
    'Nashville, TN',
    'New Orleans, LA',
    'New York, NY',
    'Oakland, CA',
    'Oklahoma City, OK',
    'Omaha, NE',
    'Orlando, FL',
    'Philadelphia, PA',
    'Phoenix, AZ',
    'Pittsburgh, PA',
    'Portland, OR',
    'Providence, RI',
    'Raleigh, NC',
    'Reno, NV',
    'Richmond, VA',
    'Sacramento, CA',
    'Salt Lake City, UT',
    'San Antonio, TX',
    'San Diego, CA',
    'San Francisco, CA',
    'San Jose, CA',
    'Seattle, WA',
    'St. Louis, MO',
    'St. Paul, MN',
    'Tampa, FL',
    'Tucson, AZ',
    'Virginia Beach, VA',
    'Washington, DC',
  ]


  // Set State Variables
  const [startingCity, setStartingCity] = useState('Randomize');
  const [endingCity, setEndingCity] = useState(null);
  const [maxDistance, setMaxDistance] = useState(null);
  const [units, setUnits] = useState('mi');
  const [path, setPath] = useState(null);
  const [startingCityObject, setStartingCityObject] = useState(null);
  const [endingCityObject, setEndingCityObject] = useState(null);

  const updateStartingCity = (city) => {
    setStartingCity(city);
    console.log('Starting City:')
    console.log(city);
  }

  const updateEndingCity = (city) => {
    setEndingCity(city);
    console.log('Ending City:')
    console.log(city);
  }

  const updateStartingCityObject = (city) => {
    setStartingCityObject(city);
    console.log('Starting City Object:')
    console.log(city);
  }

  const updateEndingCityObject = (city) => {
    setEndingCityObject(city);
    console.log('Ending City Object:')
    console.log(city);
  }

  const updatePath = (pathObject) => {
    setPath(pathObject);
    console.log('Generated Path:')
    console.log(pathObject);
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
      // The input is fine. Now we need to change the starting city if it is randomized.
      var newCity = startingCity;
      if (newCity === 'Randomize') {
        while (newCity === 'Randomize') {
          // select a random city.
          newCity = cities[Math.floor(Math.random() * cities.length)];
        }
        console.log('Randomly generated starting city:')
        console.log(newCity);
      }
      return newCity;
    }
    alert("Distance field must be filled with only contain numeric characters!");
    return false;
  }

  // API Call to get the road trip.
  const fetchRoadTrip = async (city, distance) => {
    const url = `/api?start_city=${city}&max_distance=${distance}`
    const response = await fetch(url);
    const result = await response.json();
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
    const city = validateInput(maxDistance);
    if (city != false) {
      var distance = parseInt(maxDistance, 10);
      // Since all the distances in the server are in km, may need to convert.
      if (units === 'mi') {
        distance *= milesToKm;
      }
      const apiResult = await fetchRoadTrip(city, distance);
      const roadTripPath = apiResult['path']
      const errorMessage = apiResult['errorMsg']
      if (roadTripPath.length > 0) {
        // Need to update the props of the cities and parks.
        const startCity = roadTripPath[0]
        const endCity = roadTripPath.slice(-1)[0] 
        const parks = roadTripPath.slice(1, -1);
        updateStartingCityObject(startCity);
        updateEndingCityObject(endCity);
        updatePath(parks);
      }
      else {
        alert(errorMessage + "\n" + "Please try increasing the maximum distance.");
      }
    }
  }

  const resetData = () => {
    setPath(null);
    setStartingCityObject(null);
    setEndingCityObject(null);
  }

  return (
    <div className="App">
        <Button className="App-resetButton" onClick={resetData}>Reset</Button>
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
        <InputCard 
          allCities={cities}
          updateCity={updateStartingCity} 
          updateDistance={updateMaxDistance} 
          updateUnits={updateUnits}
          submitAction={submitButtonAction}>
        </InputCard>
        <CityCard type='Starting' cityObject={startingCityObject} distUnits={units}></CityCard>
        <ParkContainer parks={path} distUnits={units}></ParkContainer>
        <CityCard type='Ending' cityObject={endingCityObject} distUnits={units}></CityCard>
    </div>
  );
}


export default App;
