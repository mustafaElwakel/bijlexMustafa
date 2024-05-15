import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './DropDownLingo.css';

function DropSpace({ onDrop, answers }) {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSelect = (event) => {
        const answer = event.target.value;
        setSelectedAnswer(answer);
        onDrop(answer);
    };

    return (
        <select className='drop-menu' value={selectedAnswer} onChange={handleSelect}>
            <option value="">Select an answer</option>
            {answers.map((answer, index) => (
                <option key={index} value={answer}>{answer}</option>
            ))}
        </select>
    );
}

function Paragraph({ text, correctText, answers }) {
    const [state, setState] = useState([...text]);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleDrop = (answer, index) => {
        const newState = [...state];
        newState[index] = answer;
        setState(newState);
    };

    const checkAnswers = () => {
        const result = state.every((answer, index) => text[index] !== '?' || answer === correctText[index]);
        setIsCorrect(result);
    };

    return (
        <p>
            {text.map((word, index) => (
                <span key={index}>
                    {word==='?'? <DropSpace onDrop={(answer) => handleDrop(answer, index)} answers={answers} /> : word} 
                </span>
            ))}
            <button onClick={checkAnswers}>Check</button>
            {isCorrect !== null && (
                <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect. Try again.'}
                </div>
            )}
            {isCorrect && <Confetti />}
        </p>
    );
}

function App() {
    const text = ['In', '?', ' field', ' of', '?', ' the', ' concept', ' of', '?', ' is', ' fundamental', ' to', ' the', '?', ' of', ' numbers', ' and', ' shapes', ' and', ' is', ' central', ' to', ' many', ' branches', ' of', '?', '.'];
    const answers = ['the', 'mathematics', 'number', 'study', 'mathematics'];
    const correctText = ['In', 'the', 'field', 'of', 'mathematics', 'the', 'concept', 'of', 'number', 'is', 'fundamental', 'to', 'the', 'study', 'of', 'numbers', 'and', 'shapes', 'and', 'is', 'central', 'to', 'many', 'branches', 'of', 'mathematics', '.'];
    
    // Mathematical twist: Count the number of occurrences of each word in the correct text
    return (
        <div>
            <Paragraph text={text} correctText={correctText} answers={answers} />
        </div>
    );
}

export default App;
