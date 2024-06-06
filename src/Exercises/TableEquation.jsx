import React, { useState } from 'react';
import './TableEquation.css'; // Import the CSS file

const TableEquation = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Numbers for the grid
  const correctAnswers = [2, 4, 6, 8];

  // State to track selected squares
  const [selectedSquares, setSelectedSquares] = useState([]);

  // Event handler for square selection
  const handleSquareClick = (number) => {
    setSelectedSquares((prevSelected) => {
      if (prevSelected.includes(number)) {
        // Deselect if already selected
        return prevSelected.filter((n) => n !== number);
      } else {
        // Select if not already selected
        return [...prevSelected, number];
      }
    });
  };

  // Check answer function
  const checkAnswer = () => {
    const sortedSelected = selectedSquares.sort();
    if (JSON.stringify(sortedSelected) === JSON.stringify(correctAnswers)) {
      alert('Congratulations! You got it right!');
    } else {
      alert('Oops! Try again.');
    }
  };

  return (
    <>
      <div className='equations'>
        <div>1 + 1 = ?</div>
        <div>2 + 2 = ?</div>
        <div>3 + 3 = ?</div>
        <div>4 + 4 = ?</div>
      </div>
      <div className="table-square">
        {numbers.map((number) => (
          <div
            key={number}
            className={`square ${selectedSquares.includes(number) ? 'selected' : ''}`}
            onClick={() => handleSquareClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <button onClick={checkAnswer}>Check Answer</button>
    </>
  );
};

export default TableEquation;
