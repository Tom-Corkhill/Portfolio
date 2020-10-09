import React from 'react';
import {useSpring, animated} from 'react-spring';

export default function Landing() {
    const props1 = useSpring({ 
        marginTop: 150, from: {marginTop: -500},
        delay: 1000,
        config: { 
            duration: 500,
            friction: 100
         }
    })
    const props2 = useSpring({ 
        marginTop: 190, from: {marginTop: -500},
        delay: 1400,
        config: { 
            duration: 500,
            friction: 100
         }
    })
    // const props3 = useSpring({ 
    //     marginTop: 260, from: {marginTop: -500},
    //     delay: 600,
    //     config: { 
    //         duration: 500,
    //         friction: 100
    //      }
    // })

    return (
        <React.Fragment>
                <div className="background">

                    {/* <animated.div className="box" style={props3}></animated.div> */}
                    <animated.div className="greeting1" style={props1}><p>Hi, I'm Tom.</p></animated.div>
                    <animated.div className="greeting2" style={props2}><p>I'm a full-stack web developer.</p></animated.div>
                </div>
        </React.Fragment>

    )
}
