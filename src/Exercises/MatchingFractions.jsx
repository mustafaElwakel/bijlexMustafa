import React , {useState} from 'react';
import QuestionBlock from './QuestionBlock';
import { constant } from 'lodash';
import AnswerBlock from './AnswerBlock';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// TODO add css for Question 

function MatchingFractions() {
    const [mainQuestions,setMainQuestions] = useState([{label: "0/1", value: 0}, {label: "1/2", value: 0.5}, {label: "1/3", value: 0.333}])
    
    const [mainAnswers,setMainAnswers] = useState([{label: "0/1 *1", value: 0}, {label: "1/2 * 1", value: 0.5}, {label: "1/3 * 1/2", value: 0.1666}])
    const [validateAnsswers, setValidateAnsswers] = useState(false);
    return (
        <DndProvider backend={HTML5Backend}>
    <div className='matching-fraction__div'>
       <div className='questions-blocks-container__div'>
       {
        mainQuestions.map(q => (<QuestionBlock question={q} k={q} validateAnsswers={validateAnsswers}/>))
       }
       </div>
       <div className='answers-blocks-container__div'>
       {
        mainAnswers.map(q => (<AnswerBlock answer={q} k={q} />))
       }
       </div>
       <button onClick={() => setValidateAnsswers(true)} >CHECK ANSWER</button>
    </div>
    </DndProvider>

);

}

export default MatchingFractions;
