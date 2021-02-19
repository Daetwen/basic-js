const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: "",
  getLength() {
    if(this.str != "")
      return this.str.split("~~").length;
    else return 0;
  },
  addLink(value) {
    if(this.getLength() > 0)
      if(typeof(value) != "undefined")
        this.str += "~~( " + value + " )";
      else
        this.str += "~~()";
    else
      if(typeof(value) != "undefined")
        this.str += "( " + value + " )";
      else
        this.str += "()";
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.getLength()){
      this.str = "";
      throw Error;
    }
      let arr = this.str.split("~~").splice(0, position - 1) + this.str.split("~~").splice(position);
      arr = arr.split(",").join("~~");
      this.str = arr.split(")(").join(")~~(");
    return this;
  },
  reverseChain() {
      this.str = this.str.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let str = this.str;
    this.str = "";
    return str;
  }
};

module.exports = chainMaker;
