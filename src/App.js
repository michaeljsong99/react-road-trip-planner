import './App.css';
import ParkCard from './ParkCard.js';
import ImageSlider from './ImageSlider.js';
import {SliderData} from './SliderData.js';
import InputCard from './InputCard.js'
import Zoom from 'react-reveal/Zoom';
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

  return (
    <div>
        <Zoom>
          <InputCard></InputCard>
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
