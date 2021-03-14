import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { FaCarAlt } from "react-icons/fa";
import './DistanceCounter.css'

const DistanceCounter = ({distance, units, total=false}) => {

  const [focus, setFocus] = React.useState(false);

  const description = (total===true) ? "Total Distance:" : "Distance to Next Destination:"

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" className="DistanceCounter">
            {description}   <CountUp start={focus ? 0 : null} end={distance} duration={2} redraw={true}>
                        {({ countUpRef }) => (
                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                            {setFocus(true);}}}>
                            <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp> {units} </Typography>
      </Box>
      <FaCarAlt size={30}/>
    </div>
  );
}

export default DistanceCounter;