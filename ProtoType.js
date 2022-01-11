function student(){
    this.name ="Javascript",
    this.age = 25,
    this.email ="jitendra@gmail.com"
}
student.prototype = {
    address:"JH",
    getName:function(){
        return stud.name;
    }
}
var stud  = new student();
// * console.log(stud.address);
console.log(stud.name);


//! this is used to access the file from other javascript files
const addAccess = require("./addition.js");

addAccess.addition();
addAccess.sumFunction(5,5)
console.log(addAccess.abc)