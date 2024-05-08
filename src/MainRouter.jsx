// MainRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import QuestionList from "./utils/questionsPage.jsx";
import Chart2 from "./Charts/Chart6.jsx";
import MatchingFractions from "./Exercises/MatchingFractions.jsx";

const MainRouter = () => {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/fraction" element={<MatchingFractions />} />
        
      </Routes>
    </Router>)
};

export default MainRouter;