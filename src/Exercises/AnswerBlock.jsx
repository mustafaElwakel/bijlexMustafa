import React from 'react';
import { useDrag } from 'react-dnd';

function AnswerBlock({ answer, answerStatus}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'answer',
        item: { answer },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    let className = '';
    if (answerStatus === 'yes' ) {
        className = 'yesAnswer';
    
    }
    else if (answerStatus === 'no') {
        className = 'noAnswer';
    } 
    return (
        <div className={'answer-option-main__div ' + className} ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{answer.label}</h3>
        </div>
    );
}

export default AnswerBlock;
