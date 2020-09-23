import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { FaAngleDown } from 'react-icons/fa';

export default function ArrowSlider(props) {
    const [toggle, set] = useState(true);
    const props1 = useSpring({ color: toggle ? "black" : "gray"
    });


    return(
        <React.Fragment>
            <animated.div className="sliderIcon" style={props1}>
                <FaAngleDown 
                    onMouseEnter={() => set(state => !state)}
                    onMouseLeave={() => set(state => !state)}
                />
            </animated.div>

        </React.Fragment>
    );
}