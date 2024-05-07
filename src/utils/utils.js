import { factorial, combination, permutation } from './mathLibrary';

export function  getQuestion(level) {
    const n1 = Math.floor(Math.random() * 11);
    const n2 = Math.floor(Math.random() * 11);
    

switch (level) {
    case 0: return {label: 'x+y', question : n1 + '+' + n2, answer: n1 + n2};
    case 1: return {label: 'x-y', question : n1 + '-' + n2, answer: n1 - n2};
    case 2: return {label: 'x*y', question : n1 + '*' + n2, answer: n1 * n2};
    case 3: return {label: 'x/y', question : n1 + '/' + n2, answer: n1 / n2};
    case 4: return {label: 'x^y', question : n1 + '^' + n2, answer: Math.pow(n1, n2)};
    case 5: return {label: 'x%y', question : n1 + '%' + n2, answer: n1 % n2};
    case 6: return {label: '|x-y|', question : '|' + n1 + '-' + n2 + '|', answer: Math.abs(n1 - n2)};
    case 7: return {label: 'sqrt(x)', question : 'sqrt(' + n1 + ')', answer: Math.sqrt(n1)};
    case 8: return {label: 'log(x)', question : 'log(' + n1 + ')', answer: Math.log(n1)};
    case 9: return {label: 'e^x', question : 'e^' + n1, answer: Math.exp(n1)};
    case 10: return {label: 'sin(x)', question : 'sin(' + n1 + ')', answer: Math.sin(n1)};
    case 11: return {label: 'cos(x)', question : 'cos(' + n1 + ')', answer: Math.cos(n1)};
    case 12: return {label: 'tan(x)', question : 'tan(' + n1 + ')', answer: Math.tan(n1)};
    case 13: return {label: 'csc(x)', question : 'csc(' + n1 + ')', answer: 1 / Math.sin(n1)};
    case 14: return {label: 'sec(x)', question : 'sec(' + n1 + ')', answer: 1 / Math.cos(n1)};
    case 15: return {label: 'cot(x)', question : 'cot(' + n1 + ')', answer: 1 / Math.tan(n1)};
    case 16: return {label: 'asin(x)', question : 'asin(' + n1 + ')', answer: Math.asin(n1)};
    case 17: return {label: 'acos(x)', question : 'acos(' + n1 + ')', answer: Math.acos(n1)};
    case 18: return {label: 'atan(x)', question : 'atan(' + n1 + ')', answer: Math.atan(n1)};
    case 19: return {label: 'sinh(x)', question : 'sinh(' + n1 + ')', answer: Math.sinh(n1)};
    case 20: return {label: 'cosh(x)', question : 'cosh(' + n1 + ')', answer: Math.cosh(n1)};
    case 21: return {label: 'tanh(x)', question : 'tanh(' + n1 + ')', answer: Math.tanh(n1)};
    case 22: return {label: 'x!', question : n1 + '!', answer: factorial(n1)};
    case 23: return {label: 'x choose y', question : n1 + ' choose ' + n2, answer: combination(n1, n2)};
    case 24: return {label: 'x P y', question : n1 + ' P ' + n2, answer: permutation(n1, n2)};
    
    default: return {label: 'x+y', question : '7+5', answer: 12};
}
}


//route