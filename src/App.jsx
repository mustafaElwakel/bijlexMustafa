import './App.css';
import DraggableBar from './DraggableBar/DraggableBar.jsx';
import React, { useState } from 'react';
import QuestionDetails from './QuestionDetails';
import questionsData from './data.js';
import Sidebar from './SideBar/SideBar.jsx';
import InputAnswer from './InputAnswer/InputAnswer.jsx';
import { Route, Router, Routes } from 'react-router-dom';
import Chart1 from './Charts/Chart1.jsx';
function App() {

    const handleDrag = (position) => {
      // Use the position data for connecting with your chart
      console.log('Dragged to:', position);
    };

    
    const [currentProblem, setCurrentProblem] = useState(1);

    const handleNext = () => {
      if(currentProblem < 6){
      setCurrentProblem(currentProblem + 1);}
    };
    
    const currentQuestion = questionsData.find((question) => question.id === currentProblem);

    const handleSidebarClick = (questionId) => {
      setCurrentProblem(questionId);
    };

    

    
  return (
    

    <div class = "center">
        <div className="sidebar-container">
      {/* <Sidebar
          questionsData={questionsData}
          currentQuestion={currentQuestion}
          onClick={handleSidebarClick}
        /> */}
      </div>
      <div>
        {currentQuestion && <QuestionDetails {...currentQuestion} />}
        </div>
        {/* <DraggableBar onDrag={handleDrag} /> */}
        <button onClick={handleNext}>Next</button>   
        {/* <InputAnswer/> */}
        {/* <CheckAnswer/> */}
    </div>



  // );
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Chart1 />} />
      
  //     </Routes>
  //   </Router>
  );
}

export default App;








