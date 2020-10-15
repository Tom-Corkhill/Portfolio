import React, {useState} from 'react';
import Icons from './Icons';
import Slider from './Slider';
import {useSpring, animated} from 'react-spring';
import { Typography } from '@material-ui/core';



export default function ProjectCard(props) {
  const [toggle, set] = useState(true);
  const props1 = useSpring({ opacity: toggle ? 1 : 0,
                            zIndex: toggle ? 3 : 1
  });
  const props2 = useSpring({ marginTop: toggle ? -10 : 50,
                             opacity: toggle ? 0 : 1
  });
  const props3 = useSpring({ marginTop: toggle ? 190 : 140,
                             opacity: toggle ? 0 : 1
  });
  return (
    <React.Fragment>

      <div className="portfolioCard" 
      onMouseEnter={() => set(state => !state)}
      onMouseLeave={() => set(state => !state)}
      >
        <animated.div className="portfolioInfo" style={props2}>
          <Typography variant="h6" >{props.title}</Typography>
          <Typography className="cardContent">{props.content}</Typography>
        </animated.div>
        <animated.div className="portfolioIcons" style={props3}>
          <Icons 
          viewURL={props.viewURL} 
          gitURL={props.gitURL}
          />
        </animated.div>
        <animated.div className={props.image} style={props1}></animated.div>
      </div>
      <Slider languages={props.languages} sliderDesc={props.sliderDesc} title={props.title} />
    </React.Fragment>
  );
}