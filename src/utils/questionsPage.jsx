import React, { useState, useEffect } from 'react';
// import ContainerExample from '../Charts/Chart1';
import { getQuestion } from '../utils/utils';
import Question from './Question';
import { Button } from 'react-bootstrap';

// TODO add css for QuestionList
function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [CheckAnswer, setCheckAnswer] = useState(false);
    // const [currrentQuestionIndex, setCurrentQuestionIndex] = useState(0);

     useEffect(() => {

        let params = new URLSearchParams(window?.location?.search)?.get?.('q')?.split?.(',');
        if (params?.length) {
            const numbers = [];
             params.forEach ( e => {
                const qIndex= parseInt(e, 10);
                if (! (Number.isNaN(qIndex) || qIndex <0 || qIndex >= 25) ) {
             
                    numbers.push( qIndex);
                }
            })
            params = numbers;
        } 
        if (!params?.length) {
            // TODO create random 5 questions 
            params = [1]
        }
        const qs = params.map(i => getQuestion(i));
        setQuestions(qs);
        
     }, []);
    return (
        <div>
            <h1>Answer the question list</h1>

            <p>{JSON.stringify(answers)}</p>
            {questions.map((question, index) => (
                <Question q={question} key={index} status={CheckAnswer && (answers[index] === question.answer ? 'OK': 'WRONG')} onAnswer={(newValue) => {
                    setAnswers({
                       ...answers,
                        [index]: +newValue
                    })
                }}></Question>
            
            ))}
            <Button onClick={
                () => {
                    setCheckAnswer(true);
    
            }}>Check answers</Button>
        </div>
    );
}

export default QuestionList;
