import React from 'react';
import {DropZone, Text} from 'react-aria-components';


// TODO add css for Question 

function QuestionBlock({question}) {
    let [dropped, setDropped] = React.useState(false);


    return (
    <div className='question-block__div'>
    <h1>{question}</h1>
    <DropZone className='answer-block__div'
      onDrop={() => {
        setDropped(true);
      }}>
      <Text slot="label">
        {dropped ? "You dropped something" : "Drop Answer here"}
      </Text>
    </DropZone>

    </div>

);

}

export default QuestionBlock;
