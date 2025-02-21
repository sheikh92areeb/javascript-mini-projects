let random = Math.floor(Math.random() * 100) + 1;

let m = 2;
let n = 4;
// let o = "+";
// let o = "-";
let o = "*";
// let o = "/";


const faultyOps = { "+": "-", "-": "/", "*": "+", "/": "**" };
const correctOps = { "+": "+", "-": "-", "*": "*", "/": "/" };

let chosenOp = random <= 10 ? faultyOps[o] : correctOps[o];
result = eval(`${m} ${chosenOp} ${n}`);
console.log(result);