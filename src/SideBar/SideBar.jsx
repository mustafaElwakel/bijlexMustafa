// Sidebar.jsx

import React from 'react';
import './SideBar.css';

const Sidebar = ({ questionsData, currentQuestionId, onClick }) => {
  return (



    <div className="sidebar">
      {questionsData.map((question) => (
        <div
          key={question.id}
          className={`sidebar-item ${currentQuestionId === question.id ? 'active' : ''}`}
          onClick={() => onClick(question.id)}
        >
          <div className="circle">
            <span>{question.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
