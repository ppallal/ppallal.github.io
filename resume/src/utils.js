var utils;
utils = {
  classNames: function (arr) {
    return arr.join(" ");
  },
  obtainData: function (page, data) {
    var evalStr;
    evalStr = page.join("\"].children[\"");
    evalStr = "data[\"" + evalStr + "\"]";
    console.log(evalStr)
    var obj;
    obj = eval(evalStr);
    if (obj.children_order == undefined) obj.children_order = []
    if (obj.children == undefined) obj.children = {}
    if (obj.note == undefined) obj.note = ""
    
    return obj
  }
};

export default utils