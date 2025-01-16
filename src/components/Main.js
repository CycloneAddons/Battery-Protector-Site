import React, { useState, useEffect } from 'react';
import Battery from '../battery-pro/Main';
import './Main.css';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showBattery, setShowBattery] = useState(false);
  const [isStopSoundButtonVisible, setIsStopSoundButtonVisible] = useState(true);
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    // Fetch the latest release from GitHub
    fetch('https://api.github.com/repos/CycloneAddons/battery-protector/releases/latest')
      .then(response => response.json())
      .then(data => {
        // Find the .msi file in the assets
        const msiAsset = data.assets.find(asset => asset.name.endsWith('.msi'));
        if (msiAsset) {
          setDownloadLink(msiAsset.browser_download_url);
        }
      })
      .catch(error => {
        console.error('Error fetching the latest release:', error);
      });
  }, []);

  const handleButtonClick = () => {
    if (downloadLink) {
      window.location.href = downloadLink;
    }
  };

  const handleStopSound = () => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
      if (!audio.paused) { // Check if the audio is playing
        audio.pause();
        audio.currentTime = 0; 
        setIsStopSoundButtonVisible(false); // Hide the button
        // Reset to the beginning
      }
    });
  
  };

  const handlePreviewAgain = () => {
    setShowBattery(false); // Reset the Battery component
    setTimeout(() => {
      setShowBattery(true); // Reinitialize Battery component
      setIsStopSoundButtonVisible(true); // Show the button again
    }, 0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowBattery(true); // Show Battery when modal is closed
  };

  return (
    <div className="main">
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className='fontPop'>We Play Sound For Preview You Can Pause Anytime...</h2>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
          </div>
          <div className="blur-background"></div>
        </div>
      )}

      <div className='dow-text'>
        <h1>Battery Protector</h1>
        <p>Your ultimate solution for battery management and protection.</p>
        <button onClick={handleButtonClick}>Download</button>
      </div>

      {showBattery && (
        <div className="screenshot">
          <Battery />
          <div className="buttonss">
            {isStopSoundButtonVisible && (
              <button className='buttonSize' onClick={handleStopSound}>Stop Sound</button>
            )}
            <button onClick={handlePreviewAgain}>Preview Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
