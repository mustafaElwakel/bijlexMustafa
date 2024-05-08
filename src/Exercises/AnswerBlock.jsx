import React from 'react';
import Draggable from 'react-draggable';


// TODO add css for Question 

function AnswerBlock({question}) {

    return (
    <Draggable >
        <div className='answer-option-main__div'>
        <h3>{question}</h3>
        </div>
    </Draggable>

);

}



export default AnswerBlock;
