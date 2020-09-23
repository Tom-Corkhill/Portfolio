import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import ArrowSlider from './ArrowSlider';


export default function Slider(props) {
    const [toggle, set] = useState(true);
    const props1 = useSpring({ marginTop: toggle ? -70 : -30,
        opacity: toggle ? 0 : 1,
        display: toggle ? "none" : "block"
    });
    const props2 = useSpring({ transform: toggle ? "rotate(0deg)" : "rotate(-180deg)"
    });


    return (
        <React.Fragment>
            <animated.div style={props2}
                onClick={() => set(state => !state)}
            > 
                <ArrowSlider />
            </animated.div>

            <animated.div className="portfolioSlider" style={props1}>
            <h2>{props.title}</h2>
            <hr></hr>
            <p>{props.sliderDesc}</p>
            <h4>Languages Used</h4>
            {props.languages.map((language) => 
                <li>{language}</li>
            )}
            </animated.div>
        </React.Fragment>
    );
}
