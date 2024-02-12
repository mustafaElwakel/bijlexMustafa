// QuestionDetails.jsx

import React from 'react';

const QuestionDetails = ({ title, description,chart, code,answer }) => {
  return (
    <div>
      <div className="header-bar">
      <h1 className='problem'>Problem {title} of 6</h1>
    </div>
      <p>{description}</p>
      <p>{chart}</p>
      <pre>{code}</pre>
    </div>
  );
};

export default QuestionDetails;
