import React from 'react';
import { useState } from 'react';
import './App.css';
import moon from './image/moon.svg'
import sun from './image/sunny.svg'

const App = (props) => {

  const [isMoodDark, setMood] = useState(false)
  const setDark = () => { setMood(true) }
  const setBright = () => { setMood(false) }
  return (
    <div className="wrapper">
    <div className={isMoodDark ? "dark" : "bright"}>
      {!isMoodDark
        ? <div onClick={setDark} className="toggle right">
          <img className="img left" src={moon}/>
          <button className="button moveRight"></button>
        </div>
        : <div onClick={setBright} className="toggle left">
          <img className="img right" src={sun}/>
          <button className="button"></button>
        </div>}
    </div>
    </div>
  );
}

export default App;
