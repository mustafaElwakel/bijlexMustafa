import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3';

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
        display: false
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
      <DraggableLineChart />
    </div>
  );
};

const DraggableLineChart = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 500)
      .attr("height", 500);

    const data = Array.from({length: 21}, (_, i) => ({x: i - 10, y: 0}));

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([0, 500]);

    const yScale = d3.scaleLinear()
      .domain([-10, 10])
      .range([500, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    const drag = d3.drag()
      .on("drag", function(event, d) {
        d.y = yScale.invert(event.y);
        d3.select(this)
          .attr("cy", event.y)
          .attr("fill", "red");
        path.attr("d", line);
      });

    const path = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .attr("r", 5)
      .call(drag);
  }, []);

  return (
    <svg ref={ref}></svg>
  );
};

export default DraggableGraph;
