import './App.css';
import ParkCard from './ParkCard.js';
import ImageSlider from './ImageSlider.js';
import {SliderData} from './SliderData.js';

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
        <ImageSlider slides={SliderData}/>
        <ImageSlider slides={SliderData}/>
        <ImageSlider slides={SliderData}/>
    </div>
  );
}


export default App;
