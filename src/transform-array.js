const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr))
    throw Error;
  if(Array.isArray(arr) && arr.length > 0){
    let itog = Array.from(arr);
    for(let i = 0; i < itog.length; i++){
      if(itog[i] == "--discard-next"){
        if(i != itog.length - 1){
          delete itog[i];
          delete itog[i + 1];
        }
        else{
          delete itog[i];
        }
      }
      if(itog[i] == "--discard-prev"){
        if(i > 0){
          delete itog[i];
          delete itog[i - 1];
        }
        else{
          delete itog[i];
        }
      }
      if(itog[i] == "--double-next"){
        if(i != itog.length - 1){
          itog.splice(i, 1, itog[i + 1]);
        }
        else{
          delete itog[i];
        }
      }
      if(itog[i] == "--double-prev"){
        if(i > 0){
          itog.splice(i, 1, itog[i - 1]);
        }
        else{
          delete itog[i];
        }
      }
    }
    itog = itog.filter((el) => {return typeof(el) != "undefined"});
    return itog;
  }
  else
    return [];
};
