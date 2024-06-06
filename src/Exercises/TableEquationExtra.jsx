import React, { useState } from 'react';
import './TableEquationExtra.css'; // Import the CSS file

const TableEquation = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Numbers for the 4x4 grid
  const correctAnswers = [2, 4, 6, 8, 10, 12, 14, 16]; // Correct answers for the 8 equations

  // State to track selected squares and correctness
  const [selectedSquares, setSelectedSquares] = useState([]);
  const [squareStatus, setSquareStatus] = useState({});

  // Event handler for square selection
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

  // Check correctness for the clicked square
  const isCorrect = correctAnswers.includes(number);
  setSquareStatus((prevStatus) => ({
    ...prevStatus,
    [number]: isCorrect ? 'correct' : 'incorrect',
  }));
};


  // Check answer function
  const checkAnswer = () => {
    const sortedSelected = selectedSquares.sort();
    const sortedCorrectAnswers = correctAnswers.sort(); // Sort the correct answers array
  
    console.log(sortedSelected);
    console.log(sortedCorrectAnswers);

    const isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrectAnswers); // Compare as strings
    setSquareStatus(
      numbers.reduce((status, number) => {
        status[number] = isCorrect ? 'correct' : 'incorrect';
        return status;
      }, {})
    );
  };
  
  return (
    <>
      <div className='equations'>
        {correctAnswers.map((answer) => (
          <div key={answer}>{answer / 2} + {answer / 2} = ?</div>
        ))}
      </div>
      <div className="table-square">
        {numbers.map((number) => (
          <div
            key={number}
            className={`square ${selectedSquares.includes(number) ? squareStatus[number] : ''}`}
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
