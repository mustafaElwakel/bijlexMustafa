import "./Chart1.css"
import React, { useState, useEffect } from 'react';
import pizzaImage from './pizza.png'; // replace with your pizza image path

const Pizza = () => {
    const [stopRotating, setStopRotating] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [rotateInterval, setRotateInterval] = useState(null);
    const [randomDegree, setRandomDegree] = useState(Math.floor(Math.random() * 360));

    useEffect(() => {
        if (!rotateInterval) {
            const interval = setInterval(() => {
                setRotation(prevRotation => {
                    let newRotation = prevRotation + 3;
                    if (newRotation >= 360) {
                        newRotation = 0;
                    }
                    return newRotation;
                });
            }, 100);
            setRotateInterval(interval);
        }
        return () => clearInterval(rotateInterval);
    }, [rotateInterval]);

    const stopRotation = () => {
        setStopRotating(true);
        clearInterval(rotateInterval);
        if ((rotation - randomDegree) <= 10|| rotation == randomDegree) {
            alert('Congratulations! You hit the target degree.');
        } else {
            alert(`You hit ${rotation} degrees. The target was ${randomDegree} degrees.`);
        }
    }

    const retry = () => {
        setRotation(0);
        setStopRotating(false);
        setRotateInterval(null);
        setRandomDegree(Math.floor(Math.random() * 360));
    }

    return (
        <div className="pizzaPage">
            <div className="pizzaContainer">
                <img className="pizza" src={pizzaImage} alt="pizza" />
                <svg className="linePizza" style={{ transform: `rotate(${rotation}deg)` }}>
                    <line x1="50%" y1="50%" x2="50%" y2="0" stroke="black" strokeWidth="2" transform="translate(0, 50%)" />
                </svg>
            </div>
            <button disabled={stopRotating} onClick={stopRotation}>Stop</button>
            <button onClick={retry}>Retry</button>
            {stopRotating && <div>Stopped at angle: {rotation} degrees</div>}
            <div>Target angle: {randomDegree} degrees</div>
        </div>
    );
};

export default Pizza;
