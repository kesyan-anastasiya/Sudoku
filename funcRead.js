const fs = require('fs');

function read() {
  const text = fs.readFileSync('./puzzles.txt', 'utf-8');
  return text;
}

module.exports = {
  read,
};
