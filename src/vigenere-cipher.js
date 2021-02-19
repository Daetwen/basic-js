const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    if(typeof(flag) == "undefined")
      this.flag = true;
    else
      this.flag = flag;
  }
  encrypt(message, key) {
    if(typeof(message) == "undefined" || typeof(key) == "undefined")
      throw Error;
    let itog = "";
    key = key.toUpperCase();
    for(let i = 0; i < (Math.floor(message.length / key.length) - 1); i++){
      key += key;
    }
    let length = message.length - key.length;
    for(let i = 0; i < length; i++){
      key += key[i];
    }
    message = message.toUpperCase();
    let count = 0;
    for(let i = 0; i < message.length; i++){
      if(message[i] >= "A" && message[i] <= "Z"){
        let sum = (message.charCodeAt(i) - 65) + (key.charCodeAt(count) - 65);
        count++;
        if(sum > 25){
          sum = sum - 26;
        }
        itog += String.fromCharCode(sum + 65);
      }
      else itog += message[i];
    }
    if(this.flag == false)
      itog = itog.split("").reverse().join("");
    return itog;
  }
  decrypt(encryptedMessage, key) {
    if(typeof(encryptedMessage) == "undefined" || typeof(key) == "undefined")
      throw Error;
    let itog = "";
    key = key.toUpperCase();
    for(let i = 0; i < (Math.floor(encryptedMessage.length / key.length) - 1); i++){
      key += key;
    }
    let length = encryptedMessage.length - key.length;
    for(let i = 0; i < length; i++){
      key += key[i];
    }
    let count = 0;
    for(let i = 0; i < encryptedMessage.length; i++){
      if(encryptedMessage[i] >= "A" && encryptedMessage[i] <= "Z"){
        let minus = (encryptedMessage.charCodeAt(i) - 65) - (key.charCodeAt(count) - 65);
        count++;
        if(minus < 0){
          minus += 26;
        }
        itog += String.fromCharCode(minus + 65);
      }
      else itog += encryptedMessage[i];
    }
    if(this.flag == false)
      itog = itog.split("").reverse().join("");
    return itog;
  }
}

module.exports = VigenereCipheringMachine;
