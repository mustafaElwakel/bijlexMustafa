import React from 'react';


// TODO add css for Question 
function Question({ q, onAnswer, status }) {
    return (<div>
        {q.question}
        <input type="text" onChange={(e)=> {
            onAnswer(e.target.value);
        }} />
        {status === 'OK' && (<div className='correct'>correct</div>) }
        {status === 'WRONG' && (<div className='wrong'>wrong</div>) }

    </div>);
}

export default Question;
