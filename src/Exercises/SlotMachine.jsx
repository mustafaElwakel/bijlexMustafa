import React, { useState } from 'react';
import './SlotMachine.css';

const SlotMachine = () => {
  const [blocks, setBlocks] = useState(Array(5).fill(null));
  const [lastBlock, setLastBlock] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const operators = ['+', '-', '*'];

  const generateRandomBlocks = () => {
    const newBlocks = blocks.map((block, index) => {
      if (index === 1 || index === 3) {
        // For the 2nd and 4th blocks, generate a random operator
        return operators[Math.floor(Math.random() * operators.length)];
      } else {
        // For the other blocks, generate a random number
        return Math.floor(Math.random() * 20);
      }
    });
    setBlocks(newBlocks);
    setIsCorrect(null); // Reset the correctness state when new blocks are generated
  };

  const checkAnswer = () => {
    // Calculate the result of the operation represented by the blocks
    const result = eval(blocks.join(''));
    // Check if the user's input matches the result
    setIsCorrect(result === Number(lastBlock));
  };

  return (
    <div className="slot-machine">
      {blocks.map((block, index) => (
        <div key={index} className="number-block">
          {block !== null ? block : ''}
        </div>
      ))}
      <input 
        type="number" 
        className={`number-block ${isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`} 
        value={lastBlock} 
        onChange={(e) => setLastBlock(e.target.value)} 
        pattern="\d*" // Only allow digits to be entered
      />
      <button className="spin-button" onClick={generateRandomBlocks}>
        Spin
      </button>
      <button className="check-button" onClick={checkAnswer}>
        Check
      </button>
      {isCorrect !== null && (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
