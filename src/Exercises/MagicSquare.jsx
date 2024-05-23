import React, { useState } from 'react';
import './MagicSquare.css';

function MagicSquare() {


// assuming the square is aranged as 
//0 - 1
//2 - 3 



  const bigSquares = [0, 1, 2, 3];
  const smallSquares = [
    { top: '52%', left: '75%', operator: '+' }, // between 1 and 3
    { top: '75%', left: '50%', operator: '-' }, // between 2 and 3
    { top: '52%', left: '25%', operator: '-' }, // between 0 and 2
    { top: '25%', left: '50%', operator: '+' }, // between 0 and 1
    { top: '25%', left: '100%', operator: '=' }, // right of 1
    { top: '99%', left: '25%', operator: '=' }, // bottom of 2
    { top: '99%', left: '75%', operator: '=' }, // bottom of 3
    { top: '75%', left: '100%', operator: '=' } // right of 3
  ];
  const answers = [
    { top: '25%', left: '125%', answer: 4 }, // right of 1
    { top: '75%', left: '125%', answer: 6 }, // right of 3
    { top: '125%', left: '75%', answer: 3 }, // bottom of 3
    { top: '125%', left: '25%', answer: 0 }  // bottom of 2
  ];

  const [inputs, setInputs] = useState({});
  const hiddenIndices = [4, 6]; // You can change these values as needed
  const correctAnswers = [1, 6]; // The correct answers corresponding to the hidden indices

  const handleChange = (e, index) => {
    setInputs({
      ...inputs,
      [index]: e.target.value
    });
  };

  const checkAnswers = () => {
    const correct = hiddenIndices.every((index, i) => {
      const userAnswer = parseInt(inputs[index], 10);
      return userAnswer === correctAnswers[i];
    });
    alert(correct ? 'Correct!' : 'Try again!');
  };

  return (
    <div className="container">
      {bigSquares.map((num, index) => (
        <div key={index} className="big-square" style={{ gridArea: `${Math.floor(index / 2) + 1} / ${index % 2 + 1} / ${Math.floor(index / 2) + 2} / ${index % 2 + 2}` }}>
          {hiddenIndices.includes(index) ? (
            <input type="number" value={inputs[index] || ''} onChange={(e) => handleChange(e, index)} />
          ) : num}
        </div>
      ))}
      {smallSquares.map((item, index) => (
        <div key={index} className="small-square" style={{ top: item.top, left: item.left }}>
          {item.operator}
        </div>
      ))}
      {answers.map((item, index) => (
        <div key={index} className="answer-square" style={{ top: item.top, left: item.left }}>
          {hiddenIndices.includes(index + 4) ? (
            <input type="number" value={inputs[index + 4] || ''} onChange={(e) => handleChange(e, index + 4)} />
          ) : item.answer}
        </div>
      ))}
       <div style={{ marginTop: '70px' }}>
        <button onClick={checkAnswers}>Check Answers</button>
      </div>
    </div>
  );
}


export default MagicSquare;
