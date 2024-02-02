const { read } = require("./funcRead.js");
const { argv } = process;

const sudoku1 = read();
const str = sudoku1.split("\r\n");
const firstLine = str[argv[2]];

function solve(str) {
  const newStr = firstLine.split("");
  const arr = [];

  const result = newStr.map((el) => (el === "-" ? (el = random()) : el));

  for (let i = 0; i < result.length; i += 9) {
    arr.push(result.slice(i, i + 9));
  }
  return arr;
}

function random() {
  return (Math.floor(Math.random() * 8) + 1).toString();
}

module.exports = { solve };
