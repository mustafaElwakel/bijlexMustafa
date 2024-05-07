import React, { useState } from 'react';
import protractor from '/Users/Mustafa Elwakel/Desktop/Bijlex/my-app/src/protractor.png'

function ImageComponent() {
  const [rotation, setRotation] = useState(0);

  const handleSliderChange = (event) => {
    setRotation(event.target.value);
  };

  return (
    <div>
      <input type="range" min="0" max="360" value={rotation} onChange={handleSliderChange} />
      <img src={protractor} alt="My Image" style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'bottom' }} />
    </div>
  );
}

export default ImageComponent;


