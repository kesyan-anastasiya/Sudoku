const { solve } = require("./funcSolved");
const { argv } = process;
const done = solve(argv[2]);
console.table(done);
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}
