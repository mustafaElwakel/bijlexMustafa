import React, { useState, useEffect } from 'react';
import { getQuestion } from '../utils/utils';

// This is a mock function, replace it with your actual function to fetch questions
const fetchQuestionById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Question ${id}`);
        }, 1000);
    });
};

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const questionIds = getQuestion(); // Replace this with your actual question IDs

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = [];
            for (let id of questionIds) {
                const question = await fetchQuestionById(id);
                fetchedQuestions.push(question);
            }
            setQuestions(fetchedQuestions);
        };

        fetchQuestions();
    }, [questionIds]);

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    {question}
                </div>
            ))}
        </div>
    );
}

export default QuestionList;
