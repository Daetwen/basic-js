const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = Math.pow(2, disksNumber) - 1;
  let second = Math.floor(3600 / turnsSpeed * turn);
  let result = {
    turns: turn,
    seconds: second
  };
  return result;
};
