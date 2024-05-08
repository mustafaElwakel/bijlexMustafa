import React from 'react';
import {DropZone, Text} from 'react-aria-components';
import AnswerBlock from './AnswerBlock';
import { getCurrentAnswer } from './AnswerBlock';

// TODO add css for Question 





function QuestionBlock({question}) {
  const checkAnswers = () => {

    };
  var currAnswer = getCurrentAnswer(currAnswer)
    let [dropped, setDropped] = React.useState(false);
    let [answer, setAnswer] = React.useState("ans");


    return (
    <div className='question-block__div'>
    <h1>{question}</h1>
    <DropZone className='answer-block__div'
      onDrop={() => {
        setDropped(true);
      }}>
      <Text slot="label" backgroundcolor = "'red" className='answer-option-main__div'>
        {dropped ? currAnswer  : "Drop Answer here"}
      </Text>
    </DropZone>
    

    </div>

);

}

export default QuestionBlock;