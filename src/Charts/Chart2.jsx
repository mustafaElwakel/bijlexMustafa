import React, { useState, useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const [slope, setSlope] = useState(1); // Default slope
  const [intercept, setIntercept] = useState(0); // Default y-intercept
  const [lineY, setLineY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [graphBounds, setGraphBounds] = useState({ top: 0, bottom: 0 });

  const lineRef = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging) {
        const rect = graphRef.current.getBoundingClientRect();
        const newLineY = Math.max(-10, Math.min(10, (event.clientY - rect.top - offsetY) / (rect.height / 20) - 10));
        setLineY(newLineY);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, offsetY]);

  const handleMouseDown = (event) => {
    const rect = lineRef.current.getBoundingClientRect();
    setOffsetY(event.clientY - rect.top - (rect.height / 20) * (lineY + 10));
    setDragging(true);
  };

  const handleGraphResize = () => {
    const rect = graphRef.current.getBoundingClientRect();
    setGraphBounds({
      top: rect.top,
      bottom: rect.bottom
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleGraphResize);
    handleGraphResize();

    return () => {
      window.removeEventListener('resize', handleGraphResize);
    };
  }, []);

  const calculateLineY = (x) => {
    return slope * x + intercept;
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    itemMouseMove: () => {
      console.error("100001")
    },


    axisX: {
      title: "X Axis",
      minimum: -10,
      maximum: 10
    },
    axisY: {
      title: "Y Axis",
      minimum: -10,
      maximum: 10
    },
    data: [
      // Vertical line (y-axis)
      {
        type: "line",
        dataPoints: [
          { x: 0, y: -10 },
          { x: 0, y: 10 }
        ]
      },
      // Horizontal line (x-axis)
      {
        type: "line",
        dataPoints: [
          { x: -10, y: 0 },
          { x: 10, y: 0 }
        ]
      },
      // Extra line
      {
        type: "line",
        markerSize: 0,
        dataPoints: [
          { x: -10, y: calculateLineY(-10) },
          { x: 10, y: calculateLineY(10) }
        ],
        itemMouseMove: () => {
          console.error("20002")
        },
      }
    ]
  };

  return (
    <div>
      <div
        ref={graphRef}
        style={{ width: '500px', height: '500px', position: 'relative', border: '1px solid #ccc' , flexDirection: 'end',}}
      >
        <CanvasJSChart options={options} />
         
      </div>

      <div>
        <label htmlFor="slope">Slope (m): </label>
        <input
          type="number"
          id="slope"
          value={slope}
          onChange={(e) => setSlope(parseFloat(e.target.value))}
        />
      </div>
      
      <div>
        <label htmlFor="intercept">Y-Intercept (b): </label>
        <input
          type="number"
          id="intercept"
          value={intercept}
          onChange={(e) => setIntercept(parseFloat(e.target.value))}
        />
      </div>  
      
    </div>
  );
};

export default App;
