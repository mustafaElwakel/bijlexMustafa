import React, { useState } from 'react';

const BoxContainer = () => {
  const boxes = Array.from({ length: 8 }, (_, index) => index + 2); // Updated range from 2 to 9
  const boxDivideNumber = 5; // Set the "box-divide" number here

  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleBoxClick = (boxNumber) => {
    if (selectedBoxes.includes(boxNumber)) {
      setSelectedBoxes(selectedBoxes.filter((selectedBox) => selectedBox !== boxNumber));
    } else {
      setSelectedBoxes([...selectedBoxes, boxNumber]);
    }
  };

  const areAllSelectedDivisible = selectedBoxes.every((selectedBox) => selectedBox % boxDivideNumber === 0);

  return (
    <div>
      <div className="box-divide" style={{ backgroundColor: 'lightblue' }}>
        {boxDivideNumber}
      </div>

      <div className="box-container">
        {boxes.map((boxNumber) => (
          <div
            key={boxNumber}
            className={`box ${selectedBoxes.includes(boxNumber) ? 'selected' : ''}`}
            onClick={() => handleBoxClick(boxNumber)}
            style={{
              backgroundColor: selectedBoxes.includes(boxNumber) ? 'grey' : 'white',
              cursor: 'pointer',
            }}
          >
            {boxNumber}
          </div>
        ))}
      </div>

      <button onClick={() => alert(areAllSelectedDivisible ? `Correct! All selected boxes are divisible by ${boxDivideNumber}` : `Oops! Not all selected boxes are divisible by ${boxDivideNumber}`)}>
        Check Answer
      </button>
    </div>
  );
};

export default BoxContainer;
