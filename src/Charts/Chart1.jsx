
import { Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { color } from 'd3';
import { getQuestion } from '../utils/utils';
import { Link, useNavigate } from "react-router-dom";
import QuestionList from '../utils/questionsPage';
import { Routes, Route } from 'react-router-dom';


function ContainerExample() {
    const [selection, setSelection] = useState([])
    let navigate = useNavigate();

    const rowCount = 5;
    const columnCout = 5;
    const handleClick = (index) => {
        setSelection((prevSelection) => {
            if (prevSelection.includes(index)) {
                const newSelection = prevSelection.filter(e => e !== index);
                return newSelection;
            } else {
                const newSelection = [...prevSelection, index];
                if (newSelection.length >= 5) {
                    navigate(`/questions?q=${newSelection.join(',')}`)
                    // <Routes>
                    // <Route path="../utils/questionPage" element={<QuestionList />} />
                    // </Routes>
                }
                return newSelection;
            }
        })
    }

    // const getColumn = (rowIndex, columnIndex) => {
    //     const existingSelection = selection.find(r => r.row === rowIndex && r.column === columnIndex);
    //     return (
    //         <Col key={rowIndex + '-' + columnIndex} onClick={() => { handleClick(rowIndex, columnIndex) }}>
    //             {/* {questions?.[rowIndex * columnCout + columnIndex] || 'test'} */}
    //             {existingSelection && <p>*</p>}
    //         </Col>
    //     );
    // }
    // const getRow = (rowIndex) => {
    //     const columns = [];
    //     for (let i = 0; i < columnCout; i++) {
    //         columns.push(getColumn(rowIndex, i));
    //     }
        
    //     return (
    //         <Row key={rowIndex}>
    //             {columns}
    //         </Row>
    //     );
    // }

    // const rows = [];
    // for (let i = 0; i < rowCount; i++) {
    //     rows.push(getRow(i));
    // }


    const getDiv = (index) => {

        const className = selection.includes(index) ? 'selected-cell' : 'not-selected-cell';
        return <div onClick={() => { handleClick(index) }} className={className}>{getQuestion(index).label}{selection.includes(index)}</div>
    }
    //Add button to submit the cuurent selection
    const contents = [];
    for (let i = 0; i < 25; i++) {
        contents.push(getDiv(i));
    }
    return <div>
        <div className='mygrid-container'>
            {contents}
        </div>
    </div>;

}

export default ContainerExample;