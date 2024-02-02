const { read } = require('./funcRead.js');

const sudoku1 = read();
const str = sudoku1.split('\r\n');
const procArgv = process.argv[2];
const firstLine = str[procArgv];

function solve(str) {
  const newStr = firstLine.split('');
  const arr = [];

  //   let numStr = '';
  //   for (let j=0; j<newStr.length; j+=1){
  //     if (newStr[0][j] !== '-') {
  //         numStr += newStr[0][j];
  //     }
  // }
  // console.log(numStr)
  // for (const el of arr[0]) {
  //     if (el === '-') {
  //       let randNum = (Math.floor(Math.random() * 8) ).toString();
  //     //   if (!numStr.includes(randNum.toString())) {
  //     //     el.replace('-', randNum);
  //     //   }
  //     el.replace('-', randNum);
  //     console.log(randNum);
  //     }
  //   }
  //   return arr;
  // let result;
  // for (let j = 0; j < newStr.length; j += 9) {
  //   arr.push(newStr.slice(j, j + 9));
  // for (let i=0; i<newStr.length; i++){
  // if (newStr[i] === '-'){
  const result = newStr.map((el) => (el === '-' ? el = random() : el));
  console.log(result);
  //  console.log(result)

  // }
  // }

  // }

  // for (let i = 0; i < result.length; i += 9) {
  //   arr.push(result.slice(i, i + 9));
  // }return arr
  for (let i = 0; i < result.length; i += 9) {
    arr.push(result.slice(i, i + 9));
  }
  return arr;
}
// return result
// }
function random() {
  return (Math.floor(Math.random() * 8) + 1).toString();
}
console.table(solve(firstLine));

module.exports = { solve };
