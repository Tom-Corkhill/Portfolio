import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';



export default function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div>
      <ButtonAppBar />
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route path="/" exact component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              {/* <Route path="/contact" component={Contact} /> */}
            </Switch>
          </animated.div>
        ))}
    </div>

  );
}
