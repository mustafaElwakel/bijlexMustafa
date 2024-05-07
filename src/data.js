// data.js
import Chart1 from "./Charts/Chart1.jsx";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3.jsx";
import Chart4 from "./Charts/Chart4.jsx";
import Chart5 from "./Charts/Chart5.jsx";

const questionsData = [
  {
    id: 1,
    title: '1',
    description: "",
    
    chart: <Chart1/>,
    code: '',
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
    description: 'This is the description for Question 3. many solutions does the quadratic equation have?-X* 2x + 5__ = 67 You \n can view the equation as two formulas: A quadratic relationshipdfopd;',
    chart: <Chart3/>,
    code: 'console.log("Hello, World!");',
  },
  {
    id: 4,
    title: '4',
    description: 'Draggable Bar',
    chart: <Chart4/>,
    code: '',
  },
  {
    id: 5,
    title: '5',
    description: 'Circular arrow with hold',
    chart: <Chart5/>,
    code: '',
  },
  
  // Add more questions as needed
];

export default questionsData;
