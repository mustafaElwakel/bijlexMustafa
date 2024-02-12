import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const DraggableGraph = () => {
  const [slope, setSlope] = useState(0);
  const [yIntercept, setYIntercept] = useState(0);

  const data = {
    labels: Array.from({length: 21}, (_, i) => i - 10),
    datasets: [{
      data: Array.from({length: 21}, (_, i) => slope * (i - 10) + yIntercept),
      borderColor: 'blue',
      borderWidth: 1,
      pointRadius: 0,
      spanGaps: false,
    }],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'center',
        min: -10,
        max: 10,
        grid: {
          display: true,
          color: 'grey',
        },
        ticks: {
          fontColor: '#3C3C3C',
          fontSize: 14,
        },
      },
      y: {
        type: 'linear',
        position: 'center',
        min: -10,
        max: 10,
        grid: {
          display: true,
          color: 'grey',
        },
        ticks: {
          fontColor: '#3C3C3C',
          fontSize: 14,
        },
      },
    },

    plugins: {
      legend: {
        display: false
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    elements: {
      point: {
        radius: 0
      }
    },
    plugins: {
      dragData: true,
      dragOptions: {
        showTooltip: true
      },
      onDragStart: function(e) {
        console.log(e)
      },
      onDrag: function(e, datasetIndex, index, value) {
        console.log(datasetIndex, index, value)
      },
      onDragEnd: function(e, datasetIndex, index, value) {
        console.log(datasetIndex, index, value)
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
      <div>
        <label>Slope:</label>
        <input type="number" value={slope} onChange={(e) => setSlope(+e.target.value)} />
      </div>
      <div>
        <label>Y Intercept:</label>
        <input type="number" value={yIntercept} onChange={(e) => setYIntercept(+e.target.value)} />
      </div>
    </div>
  );
};

export default DraggableGraph;
