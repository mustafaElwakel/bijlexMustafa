import React, { useState, useEffect } from 'react';
import './TableEquationExtra.css'; // Import the CSS file

const TableEquation = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Numbers for the 4x4 grid
  const correctAnswers = [2, 4, 6, 8, 10, 12, 14, 16, 18]; // Correct answers for the 9 equations

  // State to track selected squares and correctness
  const [selectedSquares, setSelectedSquares] = useState([]);
  const [squareStatus, setSquareStatus] = useState({});
  const [bingo, setBingo] = useState(false);

  // Bingo patterns
  const bingoPatterns = [
    // Rows
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    // Columns
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16],
    // Diagonals
    [1, 6, 11, 16],
    [4, 7, 10, 13],
  ];

  // Randomly choose 2 bingo patterns
  const selectedBingoPatterns = shuffleArray(bingoPatterns).slice(0, 2);

  // Fill squares with correct answers for selected bingo patterns and random numbers for others
  const initialSquareStatus = numbers.reduce((status, number) => {
    if (selectedBingoPatterns.some(pattern => pattern.includes(number))) {
      status[number] = correctAnswers.includes(number) ? 'correct' : '';
    } else {
      status[number] = '';
    }
    return status;
  }, {});

  // Shuffle array function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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

  // Check if selected squares form a bingo pattern and include only correct answers
  const checkBingo = (selected) => {
    return bingoPatterns.some(pattern =>
      pattern.every(num => selected.includes(num)) && pattern.every(num => correctAnswers.includes(num))
    );
  };

  useEffect(() => {
    const isBingo = checkBingo(selectedSquares);
    setSquareStatus((prevStatus) => {
      const newStatus = { ...prevStatus };
      numbers.forEach((number) => {
        if (selectedSquares.includes(number)) {
          newStatus[number] = isBingo && correctAnswers.includes(number) ? 'correct' : 'selected';
        } else {
          newStatus[number] = '';
        }
      });
      return newStatus;
    });
    setBingo(isBingo);
  }, [selectedSquares]);

  return (
    <>
      <div className='equations'>
        {correctAnswers.map((answer, index) => (
          <div key={index}>{answer / 2} + {answer / 2} = ...</div>
        ))}
      </div>
      <div className="table-square">
        {numbers.map((number) => (
          <div
            key={number}
            className={`square ${squareStatus[number]}`}
            onClick={() => handleSquareClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
      {bingo && <div className="bingo-message">Bingo! Correct combination.</div>}
    </>
  );
};

export default TableEquation;
