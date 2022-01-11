
function sum(){
    console.log("this is addition function");
    var val="20";
}
 var l =  "Module Practices";   

module.exports.addition = sum();
module.exports.abc = l


//# second method to defined
module.exports = {
    sumFunction:function(a,b){
        return a+b;
    },
    val:20
}