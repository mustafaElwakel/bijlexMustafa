import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function QuestionBlock({question}) {
    let [droppedAnswers, setDroppedAnswers] = useState([]);

    const [, drop] = useDrop(() => ({
        accept: 'answer',
        drop: (item, monitor) => {

            setDroppedAnswers(prevState => [...prevState, item.answer]);
   
    },
    }));

    return (
        <div className='question-block__div'>
            <h1>{question}</h1>
            <div ref={drop} className='answer-block__div'>
                {droppedAnswers.length > 0 ? droppedAnswers.map((answer, index) => (
                    <div key= {index} className='answer-option-main__div' style= {{backgroundColor: '#007BFF', color: 'white', margin: '10px', padding: '10px'}}>
                        {answer}
                    </div>
                )) : <div className='answer-option-main__div'>Drag answer here</div>}
            </div>
        </div>
    );
}

export default QuestionBlock;
