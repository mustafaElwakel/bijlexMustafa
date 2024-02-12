// NumberInput.jsx

import React, { useState } from 'react';
import './InputAnswer.css';

function InputAnswer() {
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue !== numericValue) {
      setErrorMessage('Please enter only numbers.');
    } else {
      setErrorMessage('');
    }

    e.target.value = numericValue;
  };

  return (
    <div className="number-input-container">
      <label htmlFor="numberInput">x = </label>
      <input
        type="text"
        id="numberInput"
        className="number-input"
        onInput={validateInput}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputAnswer;
