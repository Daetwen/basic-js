const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let itog = "";
  if(typeof(str) != "string")
    str = String(str);

  if(typeof(options.addition) == "undefined")
    options.addition = "";
  if(typeof(options.addition) != "string")
    options.addition = String(options.addition);

  if(typeof(options.repeatTimes) == "undefined")
    options.repeatTimes = 0;

  if(typeof(options.additionRepeatTimes) == "undefined")
    options.additionRepeatTimes = 0;

  if(typeof(options.separator) == "undefined")
    options.separator = "+";

  if(typeof(options.additionSeparator) == "undefined")
    options.additionSeparator = "|";

  for(let j = 0; j < options.additionRepeatTimes - 1; j++){
    str += options.addition + options.additionSeparator;
  }
  str += options.addition;
  for(let i = 0; i < options.repeatTimes - 1; i++){
    itog += str + options.separator;
  }
  itog += str;
  return itog;
};
