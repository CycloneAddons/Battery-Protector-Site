import React from 'react';
import './App.css';
const Home = ({ batteryLevel, handleCheckboxChange, isChecked }) => {
    return (
        <div className="batteryDetails"> 
          <div className="card">
            <pa className="ctitle"><span>Battery Level</span></pa>
            <div className={`g-circle`}></div>
            <pa className="ccontent battery-p">{batteryLevel}%</pa>
          </div>
          <div className="card buttom">
            <pa className="ctitle autostart"><span>Autostart</span></pa>
            <label className="cosmic-toggle">
              <input
                className="toggle"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div className="slider">
                <div className="cosmos" />
                <div className="energy-line" />
                <div className="energy-line" />
                <div className="energy-line" />
                <div className="toggle-orb">
                  <div className="inner-orb" />
                  <div className="ring" />
                </div>
                <div className="particles">
                  <div style={{ '--angle': '30deg' }} className="particle" />
                  <div style={{ '--angle': '60deg' }} className="particle" />
                  <div style={{ '--angle': '90deg' }} className="particle" />
                  <div style={{ '--angle': '120deg' }} className="particle" />
                  <div style={{ '--angle': '150deg' }} className="particle" />
                  <div style={{ '--angle': '180deg' }} className="particle" />
                </div>
              </div>
            </label>
            <pa className="ccontent on-of">{isChecked ? 'On' : 'Off'}</pa>
          </div>
        </div>
      );
    };
    

export default Home;
