const fs = require("fs");

function read() {
  const text = fs.readFileSync("./puzzles.txt", "utf-8");
  return text;
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

module.exports = {
  read,
};
