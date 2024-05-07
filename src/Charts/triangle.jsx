import { useState } from 'react';
import './ButtonTriangle.css'

export default function ButtonZoom({ onClick }) {
    const [buttonColor, setButtonColor] = useState('#0a0a23');
    const [buttonName, setButtonName] = useState('Zoom triangle');

    function handleClick() {
        setButtonColor(prevColor => prevColor === '#0a0a23' ? '#C133FF' : '#0a0a23');
        setButtonName(prevName => prevName === 'Zoom triangle' ? 'Zooming triangle...' : 'Zoom triangle');
        onClick();
    }

    return (
        <button 
            className='button-zoom'
            onClick={handleClick}
            style={{ backgroundColor: buttonColor, marginTop: '150px' }}
        >
            {buttonName}
        </button>
    );
}