import Zoom from 'react-reveal/Zoom';
import ParkCard from './ParkCard';

const ParkContainer = ({parks}) => {

    if (parks===null) {
        return null
    }

    if(!Array.isArray(parks) || parks.length <= 0) {
        return null;
    }

    console.log(parks.length);

    return (
        <section>
            {parks.map((park, index) => {
                return (
                    <Zoom>
                        <ParkCard parkInfo={park} key={index} parkNum={index+1}></ParkCard>
                    </Zoom>
                )
            })}
        </section>
    )
}

export default ParkContainer;