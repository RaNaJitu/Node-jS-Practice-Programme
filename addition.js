const sum = ()=>{
    console.log("this is addition function")
}
const l =  "Module Practices";
module.exports.addition = sum;
module.exports.abc = l;

//# second method to defined
module.exports = {
    sumFunction:function(a,b){
        return a+b;
    }
}