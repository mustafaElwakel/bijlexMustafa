// MainRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import QuestionList from "./utils/questionsPage.jsx";
import Chart2 from "./Charts/Chart6.jsx";

const MainRouter = () => {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/questions" element={<QuestionList />} />
      
      </Routes>
    </Router>)
};

export default MainRouter;
