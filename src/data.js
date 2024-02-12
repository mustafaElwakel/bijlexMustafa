// data.js
import DraggableGraph from "./Charts/Chart1.jsx";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3.jsx";

const questionsData = [
  {
    id: 1,
    title: '1',
    description: "How many solutions does the quadratic equation have?-X* 2x + 5__ = 67 You can view the equation as two formulas: A quadratic relationshipdfopd;",
    
    chart: <DraggableGraph/>,
    code: 'Now Read the number of solutiobns of the equations',
    answer: 20,
  }, 

  {
    id: 2,
    title: '2',
    description: 'How many solutions does the quadratic equation have?-X* 2x + 5__ = 67 You can view the equation as two formulas: A quadratic relationshipdfopd;.',
    chart: <Chart2/>,
    code: '',
  },
  {
    id: 3,
    title: '3',
    description: 'This is the description for Question 3.',
    chart: <Chart3/>,
    code: 'console.log("Hello, World!");',
  },
  // {
  //   id: 4,
  //   title: '4',
  //   description: 'This is the description for Question 4.',
  //   chart: <Chart2/>,
  //   code: '/* Code for Question 2 */',
  // },
  // {
  //   id: 5,
  //   title: '5',
  //   description: 'This is the description for Question 5.',
  //   chart: <Chart3/>,
  //   code: 'console.log("Hello, World!");',
  // },
  
  // Add more questions as needed
];

export default questionsData;
