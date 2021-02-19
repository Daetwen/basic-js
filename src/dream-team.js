const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) && members.length > 0){
    let itog = "";
    for(let i = 0; i < members.length; i++){
      if(typeof(members[i]) == "string"){
        let temp = members[i].trim();
        itog += temp[0].toUpperCase();
      }
    }
    return itog.split('').sort().join('');
  }
  else
    return false;
};
