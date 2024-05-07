import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const MyChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Generate some random data
    const data = Array.from({ length: 10 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));

    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Random Points',
            data,
            fill: false,
            borderColor: 'rgba(0, 123, 255, 0.5)',
          },
        ],
      },
      options: {
        scales: {
          xAxes: [{ type: 'linear', position: 'bottom' }],
        },
      },
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MyChart;
