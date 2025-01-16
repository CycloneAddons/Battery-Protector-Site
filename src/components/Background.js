import React from 'react';

const stars = [
  { top: '20%', left: '10%', delay: '0s' },
  { top: '30%', left: '50%', delay: '1s' },
  { top: '80%', left: '70%', delay: '2s' },
  // Add more stars as needed
];

const Background = () => {
  return (
    <div className="background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="starr"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
