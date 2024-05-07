import React, { useState, useRef } from 'react';
import protractor from '/Users/Mustafa Elwakel/Desktop/Bijlex/my-app/src/protractor.png';
import { FaArrowCircleUp } from 'react-icons/fa';

function ImageComponent() {
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef();

  const handleMouseDown = (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    let newRotation = Math.atan2(y, x) * (180 / Math.PI);
    setRotation(newRotation);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translate(-50%, -50%)' }} onMouseDown={handleMouseDown}>
        <FaArrowCircleUp size={30}/>
      </div>
      <img ref={imageRef} src={protractor} alt="My Image" style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'bottom' }} />
    </div>
  );
}

export default ImageComponent;








