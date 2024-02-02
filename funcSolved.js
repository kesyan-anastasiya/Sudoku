const { read } = require('./funcRead.js');

const sudoku1 = read();
const str = sudoku1.split('\r\n');
const firstLine = str[0];

function solve(str) {
  const newStr = str.split('');
  const arr = [];

  for (let i = 0; i < newStr.length; i += 9) {
    arr.push(newStr.slice(i, i + 9));
    // console.log(arr)
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '-') {
      let numStr = '';
      numStr += arr[i];
      console.log(arr[i]);
      console.log(numStr);
    }
  }
  for (const el of arr) {
    if (el === '-') {
      const randNum = Math.floor(Math.random() * 8) + 9;
      if (!numStr.includes(randNum)) {
        el.replace('-', randNum);
      }
    }
  }
  return arr;
}

console.table(solve(firstLine));

module.exports = { solve };
