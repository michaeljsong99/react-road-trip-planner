import './App.css';
import ParkCard from './ParkCard.js';
import ImageSlider from './ImageSlider.js';
import {SliderData} from './SliderData.js';
import InputCard from './InputCard.js'
import InputCard2 from './InputCard2.js'
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';
import {useEffect} from 'react'

// function App() {
//   return (
//     <div>
//       <div className="index">
//         <header className="App-header">
//           <ParkCard></ParkCard>
//         </header>
//       </div>
//     </div>
//   );
// }

function App() {

  var string0 = 'Hey there!'
  var string1 = 'This site is designed to generate your dream road trip!'
  var string3 = 'With 200+ National Park Sites across the U.S., the possibiliities are endless!'
  var string2 = 'To get started, select your configurations in the input panel below.'

  return (
    <div className="App">
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
          <InputCard2></InputCard2>
        </Zoom>
        <Zoom>
          <ImageSlider slides={SliderData}/>
          <ImageSlider slides={SliderData}/>
          <ImageSlider slides={SliderData}/>
        </Zoom>
    </div>
  );
}


export default App;
