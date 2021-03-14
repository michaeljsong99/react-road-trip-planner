import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const GoogleRating = ({rating, numRatings}) => {

  const [focus, setFocus] = React.useState(false);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Average Rating</Typography>
        <Rating name="read-only" size="large" value={rating} precision={0.1} readOnly />
        <Typography component="legend" style={{marginTop: 5, marginBottom:20}}>
            from    <CountUp start={focus ? 0 : null} end={numRatings} duration={2} redraw={true}>
                        {({ countUpRef }) => (
                            <VisibilitySensor onChange={(isVisible) => {if (isVisible) 
                            {setFocus(true);}}}>
                            <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp> reviews</Typography>
      </Box>
    </div>
  );
}

export default GoogleRating;