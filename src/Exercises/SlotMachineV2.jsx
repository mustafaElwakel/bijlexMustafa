import React, { useState, useEffect } from 'react';
import './SlotMachine.css';

const SlotMachine = () => {
  const [blocks, setBlocks] = useState(Array(7).fill(null)); // Increase the size of the array to 7
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctOperator, setCorrectOperator] = useState(null); // Store the correct operator

  const operators = ['+', '-', '*'];

  const generateRandomBlocks = () => {
    const operator = operators[Math.floor(Math.random() * operators.length)]; // Generate a random operator
    setCorrectOperator(operator); // Set the correct operator
    const newBlocks = blocks.map((block, index) => {
      if (index === 3) { // For the 4th block, leave it as null for the user to fill in
        return null;
      } else if (index % 2 === 0 || index === 5) { // For the 1st, 3rd, 5th and 6th blocks, generate a random number or equals sign
        return index === 5 ? '=' : Math.floor(Math.random() * 10);
      } else if (index === 7) { // For the 7th block, calculate the result based on the operator
        
        const result1 = eval(`${blocks[0]}${operator}${blocks[2]}${operator}${blocks[4]}`);
        console.log(result1);
        return result1;
    } else { // For the 2nd block, use the generated operator
        return operator;
      }
    });
    const result1 = eval(`${blocks[0]}${operator}${blocks[2]}${operator}${blocks[4]}`); 
    console.log(result1);   
    setBlocks(newBlocks);
    setIsCorrect(null); // Reset the correctness state when new blocks are generated
  };

  const checkAnswer = () => {
    // Calculate the result of the operation represented by the blocks
    const result = eval(blocks.slice(0, 5).join('')); // Only evaluate the first 5 blocks
    // Check if the user's input makes the equation correct
    setIsCorrect(result === blocks[6]); // Check against the 7th block
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
              onChange={(e) => setBlocks([...blocks.slice(0, index), e.target.value, ...blocks.slice(index + 1)])} 
              pattern="[+\\-\\*]" // Only allow operators to be entered in the 4th block
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
          {isCorrect ? 'Correct!' : `Incorrect. The correct operator is ${correctOperator}. Try again.`}
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
