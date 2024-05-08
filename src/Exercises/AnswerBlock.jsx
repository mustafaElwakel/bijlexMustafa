import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

let tempAnswer = "0";

export function getCurrentAnswer() {
    return tempAnswer;
}

function AnswerBlock({ answer }) {
    tempAnswer = answer;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: answer,
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

export default AnswerBlock;
