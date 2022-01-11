//! Create and Trigger Custom Event in Node.js


const evn = require("events")
const evns = new evn.EventEmitter();

const secondEvents = (n1, n2)=>{
    console.log(n1+n2);
    evns.emit('click1');
}

const thiredEvents = (n1, n2)=>{
    console.log("thired Events");
}
//? multiple events Trigger
evns.on('click',secondEvents);
evns.on('click1',thiredEvents);
evns.emit('click',3,4);

//* this is singal events Trigger
evns.on('xyzclick',(n1,n2)=>console.log(n1 * n2));
evns.emit('xyzclick',12,4);


//? this Events create in the vanilla  js
// $('#button').on('click', function(){
//     console.log("my first Events");
// })

