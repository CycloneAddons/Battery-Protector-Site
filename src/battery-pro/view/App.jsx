import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';
import Setting from './Setting';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState(1); // Battery level animation
  const [isChecked, setIsChecked] = useState(true); // Checkbox state
 const audio = useRef(null); // Audio element reference
 const [isSoundStopped, setIsSoundStopped] = useState(false);
 const [popupVisible, setPopupVisible] = useState(false);
 const [timeoutId, setTimeoutId] = useState(null);
 

useEffect(() => {
    let interval = null;
    if (batteryLevel < 80) {
      interval = setInterval(() => {

        setBatteryLevel((prev) => Math.min(prev + 1, 80));
      }, 30); 

    } else if (batteryLevel === 80) {
    audio.current.play(); 
    }
    return () => clearInterval(interval);
  }, [batteryLevel]);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };






  const handleStopSound = () => {
    setPopupVisible(true);
  };

  const handleSelectTime = async (time) => {
    setPopupVisible(false);
    setIsSoundStopped(true);
    audio.current.pause();
    let timeoutDuration;
    switch (time) {
      case '5min':
        timeoutDuration = 5 * 60 * 1000;
        break;
      case '10min':
        timeoutDuration = 10 * 60 * 1000;
        break;
      case '30min':
        timeoutDuration = 30 * 60 * 1000;
        break;
      case 'untilTurnedOn':
        timeoutDuration = null;
        break;
      default:
        timeoutDuration = null;
    }

    // if (store) {
    //   await store.set('soundStatus', 'stopped');
    //   await store.set('stopTimestamp', Date.now());
    //   await store.set('stopDuration', timeoutDuration);
    //   await store.save();
    //   console.log('Stopped instantly');
    // }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (timeoutDuration) {
      const id = setTimeout(async () => {
        handleStartSound();
      }, timeoutDuration);
      setTimeoutId(id);
    }
  };

  const handleStartSound = async () => {
    setIsSoundStopped(false);
    audio.current.play();
    // if (store) {
    //   await store.set('soundStatus', 'started');
    //   await store.set('stopTimestamp', null);
    //   await store.set('stopDuration', null);
    //   await store.save();
    //   console.log('Started again');
    // }

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };




  return (
       
    <div>
      <div className="navbar">
        <button
          onClick={() => handleNavigate('/')}
          className="navbutton normal no-animation"
        >
          <span className="itemname">Home</span>
        </button>
        <button
          onClick={isSoundStopped ? handleStartSound : handleStopSound}
          className={isSoundStopped ? "navbutton onbutton no-animation" : "navbutton stopbutton no-animation"}
        >
          <span className="itemname">{isSoundStopped ? 'On Sound' : 'Stop Sound'}</span>
        </button>
        <button
          onClick={() => handleNavigate('/settings')}
          className="navbutton normal no-animation"
        >
          <span className="itemname">Settings</span>
        </button>
      </div>

      {popupVisible && (
        <>
          <div className="popup-backdrop" onClick={() => setPopupVisible(false)}></div>
          <div className="popup-menu">
            <button onClick={() => handleSelectTime('5min')}>5 min</button>
            <button onClick={() => handleSelectTime('10min')}>10 min</button>
            <button onClick={() => handleSelectTime('30min')}>30 min</button>
            <button onClick={() => handleSelectTime('untilTurnedOn')}>Until I turn it back on</button>
          </div>
        </>
      )}

      <Routes>
        <Route path="/" element={<Home batteryLevel={batteryLevel} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
      
    
    <audio ref={audio} loop>
    <source src="alert.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
    </div>
  );
};

export default App;
