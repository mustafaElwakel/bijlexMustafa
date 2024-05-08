import React, { useState } from 'react';
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
function DropSpace({ onDrop }) {
    const [droppedAnswer, setDroppedAnswer] = useState(null);
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

    return (
        <span className='drop-space' ref={drop} style={{ backgroundColor: isOver ? '#e0e0e0' : 'transparent' }}>
            {droppedAnswer || ""}
        </span>
    );
}



function Paragraph({ text, answers }) {
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
                    {word}
                    {answers.includes(word) ? <DropSpace onDrop={(answer) => handleDrop(answer, index)} /> : ' '}
                </span>
            ))}
        </p>
    );
}

function App() {
    const text = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
    const answers = ['quick', 'fox', 'jumps', 'lazy', 'dog'];

    return (
        <DndProvider backend={HTML5Backend}>
            <Paragraph text={text} answers={answers} />
            {answers.map((answer, index) => (
                <AnswerBlock key={index} answer={answer} />
            ))}
        </DndProvider>
    );
}

export default App;
