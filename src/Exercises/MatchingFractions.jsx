import React , {useState} from 'react';
import QuestionBlock from './QuestionBlock';
import { constant } from 'lodash';
import AnswerBlock from './AnswerBlock';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// TODO add css for Question 

function MatchingFractions() {
    const [mainQuestions,setMainQuestions] = useState(["0/1", "1/2", "1/3"])
    
    const [mainAnswers,setMainAnswers] = useState(["0", "0.5", "3","10","2","3.5"])

    return (
        <DndProvider backend={HTML5Backend}>
    <div className='matching-fraction__div'>
       <div className='questions-blocks-container__div'>
       {
        mainQuestions.map(q => (<QuestionBlock question={q} k={q} />))
       }
       </div>
       <div className='answers-blocks-container__div'>
       {
        mainAnswers.map(q => (<AnswerBlock answer={q} k={q} />))
       }
       </div>
       <button >CHECK ANSWER</button>
    </div>
    </DndProvider>

);

}



export default MatchingFractions;