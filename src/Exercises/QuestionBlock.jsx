import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import AnswerBlock from './AnswerBlock';

function QuestionBlock({question, validateAnsswers}) {
    let [droppedAnswers, setDroppedAnswers] = useState([]);

    const [, drop] = useDrop(() => ({
        accept: 'answer',
        drop: (item, monitor) => {

            setDroppedAnswers(prevState => {
                if ( prevState.length>=8) {
                    return prevState;
                }
                return [...prevState, item.answer];
            });
   
    },
    }));

   const getAnswerStatus = (answer) => {
    if (validateAnsswers) {
        //TODO use rounding in comparison
        //TODO return fancier results
       return  answer.value === question.value ? 'yes': 'no';
    } else {return null;}
   }
    
    return (
        <div className='question-block__div'>
            <h1>{question.label}</h1>
            <div ref={drop} className='answer-block__div'>
                {droppedAnswers.length > 0 ? droppedAnswers.map((answer, index) => (
                    
                    <AnswerBlock answer={answer} answerStatus={getAnswerStatus(answer)}/>
                 
                    
                )) : <div className='answer-option-main__div'>Drag answer here</div>}
            </div>
        </div>
    );
}

export default QuestionBlock;

   /* <div key= {index} className='answer-option-main__div' style= {{backgroundColor: '#007BFF', color: 'white', margin: '10px', padding: '10px'}}>
                        
                        {answer.label} {getAnswerStatus(answer)}
                    </div> */