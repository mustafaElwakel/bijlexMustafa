import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

let tempAnswer = "0";

export function getCurrentAnswer() {
    return tempAnswer;
}

function AnswerBlock({ answer }) {
    tempAnswer = answer;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'answer',
        item: { answer },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div className='answer-option-main__div' ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{answer}</h3>
        </div>
    );
}

function DropSpace({ onDrop, expectedAnswer, checkAnswers }) {
    const [droppedAnswer, setDroppedAnswer] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'answer',
        drop: (item, monitor) => {
            onDrop(item.answer);
            setDroppedAnswer(item.answer);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    useEffect(() => {
        if (checkAnswers && droppedAnswer) {
            setBackgroundColor(droppedAnswer === expectedAnswer ? 'green' : 'red');
        }
    }, [checkAnswers, droppedAnswer, expectedAnswer]);

    return (
        <span className='drop-space' ref={drop} style={{ backgroundColor: checkAnswers ? backgroundColor : 'transparent' }}>
            {droppedAnswer || ""}
        </span>
    );
}

function Paragraph({ text, correctText, checkAnswers }) {
    const [state, setState] = useState(Array(text.length).fill(null));

    const handleDrop = (answer, index) => {
        const newState = [...state];
        newState[index] = answer;
        setState(newState);
    };

    return (
        <p>
            {text.map((word, index) => (
                <span key={index}>
                    {word==='?'? <DropSpace expectedAnswer={correctText[index]} onDrop={(answer) => handleDrop(answer, index)} checkAnswers={checkAnswers} /> : word} 
                </span>
            ))}
        </p>
    );
}

function App() {
    const text = ['The', '?', 'brown', '?', '?', 'over', ' the', '?', '?'];
    const answers = ['quick', 'fox', 'jumps', 'lazy', 'dog'];
    const correctText = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
    const [checkAnswers, setCheckAnswers] = useState(false);

    return (
        <DndProvider backend={HTML5Backend}>
            <Paragraph text={text} correctText={correctText} checkAnswers={checkAnswers} />
            {answers.map((answer, index) => (
                <AnswerBlock key={index} answer={answer} />
            ))}
            <button onClick={() => setCheckAnswers(true)}>Check Answers</button>
        </DndProvider>
    );
}

export default App;
