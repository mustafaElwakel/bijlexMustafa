// MainRouter.jsx
import React from "react";
import DuoLingo from "./Exercises/DuoLingo.jsx";
import DropDownLingo from "./Exercises/DropDownLingo.jsx";
import SlotMachine from "./Exercises/SlotMachine.jsx";
import MagicSquare from "./Exercises/MagicSquare.jsx";
import SlotMachineV2 from "./Exercises/SlotMachineV2.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import QuestionList from "./utils/questionsPage.jsx";
import Chart2 from "./Charts/Chart6.jsx";
import MatchingFractions from "./Exercises/MatchingFractions.jsx";
import DivisibleNumber from "./Exercises/DivisibleNumber.jsx";
import TableEquation from "./Exercises/TableEquation.jsx";

import TableEquationExtra from "./Exercises/TableEquationExtra.jsx";
const MainRouter = () => {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/fraction" element={<MatchingFractions />} />
        <Route path="/duolingo" element={<DuoLingo />} />
        
        <Route path="/droplingo" element={<DropDownLingo/>} />
        <Route path="/slotmachine" element={<SlotMachine/>} />
        
        <Route path="/slotmachine2" element={<SlotMachineV2/>} />
        
        <Route path="/magic" element={<MagicSquare/>} />
        <Route path="/divide" element={<DivisibleNumber/>} />

        <Route path="/eqtable" element={<TableEquation/>} />
        <Route path="/eqtable2" element={<TableEquationExtra/>} />


      </Routes>
    </Router>)
};

export default MainRouter;
