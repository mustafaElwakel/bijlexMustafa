import React, { useState } from 'react';
import './SlotMachine.css';

const SlotMachine = () => {
  const [blocks, setBlocks] = useState(Array(7).fill(null)); // Increase the size of the array to 7
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctOperator1, setCorrectOperator1] = useState(null); // Store the correct operator1
  const [correctOperator2, setCorrectOperator2] = useState(null); // Store the correct operator2

  const operators = ['+', '-', '*'];

  const generateRandomBlocks = () => {
    const operator1 = operators[Math.floor(Math.random() * operators.length)]; // Generate a random operator1
    let operator2 = operators[Math.floor(Math.random() * operators.length)]; // Generate a random operator2
    while (operator2 === operator1) { // Ensure operator2 is not the same as operator1
      operator2 = operators[Math.floor(Math.random() * operators.length)];
    }
    setCorrectOperator1(operator1); // Set the correct operator1
    setCorrectOperator2(operator2); // Set the correct operator2

    const newBlocks = blocks.map((block, index) => {
      if (index % 2 === 0 || index === 5) {
        // For blocks 1, 3, 5, and the 6th (index 5), generate random numbers or '='
        return index === 5 ? '=' : Math.floor(Math.random() * 10);
      } else if (index === 3) {
        // For block 4, leave it as null for user input
        return null;
      } else {
        // For other blocks, use the generated operators
        return index === 1 ? operator1 : operator2;
      }
    });

    // Calculate the result based on blocks 1, 3, 5 and the generated operators
    const result = eval(`${newBlocks[0]} ${operator1} ${newBlocks[2]} ${operator2} ${newBlocks[4]}`); // Evaluate the expression
    newBlocks[6] = result; // Set the result in the 7th block

    setBlocks(newBlocks);
    setIsCorrect(null); // Reset correctness state
  };

  const checkAnswer = () => {
    const result = eval(blocks.slice(0, 5).join('')); // Calculate the expected result
    setIsCorrect(result === blocks[6]); // Check against the 7th block for correctness
  };

  return (
    <div className="slot-machine">
      {blocks.map((block, index) => (
        <div key={index} className={`number-block ${index === 3 ? 'input-block' : ''}`}>
          {index !== 3 ? block : (
            <input
              className={`number-block ${isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              type="text"
              value={blocks[index] || ''}
              onChange={(e) => {
                const updatedBlocks = [...blocks];
                updatedBlocks[index] = e.target.value;
                setBlocks(updatedBlocks);
              }}
              pattern="[+\\-\\*]" // Only allow operators to be entered in the input block
            />
          )}
        </div>
      ))}
      <button className="spin-button" onClick={generateRandomBlocks}>
        Spin
      </button>
      <button className="check-button" onClick={checkAnswer}>
        Check
      </button>
      {isCorrect !== null && (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : `Incorrect. The correct operators are ${correctOperator1} and ${correctOperator2}. Try again.`}
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
