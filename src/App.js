import './App.css';
import CityCard from './CityCard.js';
import ParkCard from './ParkCard.js';
import InputCard from './InputCard.js'
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';
import {Button} from "react-bootstrap";

function App() {

  var string0 = 'Hey there!'
  var string1 = 'This site is designed to generate your dream road trip!'
  var string3 = 'With 200+ National Park Sites across the U.S., the possibiliities are endless!'
  var string2 = 'To get started, select your configurations in the input panel below.'

  return (
    <div className="App">
        <Button className="App-resetButton">Reset</Button>
        <div className="App-typewriter">
          <Typewriter
            options={{
              strings: [string0, string1, string2, string3],
              autoStart: true,
              loop: true,
              delay: 5,
              deleteSpeed: 10,
              pauseFor: 2000,
            }}
          />
        </div>
        <Zoom>
          <InputCard></InputCard>
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
