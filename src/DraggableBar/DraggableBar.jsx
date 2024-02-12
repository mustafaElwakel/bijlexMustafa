
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './DraggableBar.css';

const DraggableBar = ({ onDrag }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    const { x } = ui;
    setPosition({ x, y: 0 });
    onDrag && onDrag({ x, y: 0 });
  };

  return (
    <div className="draggable-bar">
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        bounds={{ left: 0, right: 540 }} // Adjust the bounds as needed (600 - 60)
        grid={[10, 10]} // Adjust grid size for smoother dragging
        onDrag={handleDrag}
      >
        <div className="handle"></div>
      </Draggable>
    </div>
  );
};

export default DraggableBar;
