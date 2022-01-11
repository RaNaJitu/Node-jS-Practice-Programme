const addAccess = require("./addition");
//import l from './addition'

function student(){
    this.name ="Javascript",
    this.age = 25,
    this.email ="jitendra@gmail.com"
}
student.prototype = {
    address:"JH",
    getEmail:function(){
        return stud.email;
    }
}
var stud  = new student();
// console.log(stud.address);
// console.log(stud.name);
// console.log(stud.getEmail());


//! this is used to access the file from other javascript files

addAccess.addition;
//console.log(addAccess.abc);
console.log(addAccess.sumFunction(5,5))
console.log(addAccess.val)
//console.log(l)
