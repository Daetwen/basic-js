const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(date === undefined)
      return 'Unable to determine the time of year!';
    if(typeof(date) != "object")
      throw Error;
    if(date.getTime()){
      let Month = date.getMonth();
      if (Month >= 0 && Month < 2 || Month == 11)
        return "winter";
      if (Month >= 2 && Month < 5)
        return "spring";
      if (Month >= 5 && Month < 8)
        return "summer";
      if (Month >= 8 && Month < 11)
        return "autumn";
    }
};
