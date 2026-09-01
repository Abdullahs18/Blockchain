console.log("Hello world");
let x=5;
const y=10;
var z=15

let n=42
let f=3.14
let s="hello"
let b=true;
let nothing = null;
let notDefined

let name="abdullah"
console.log(`Hello, ${name}!`);


function add (a,b){
    return a+b;
}

//arrow function

const add2=(a,b)=>a+b;

const square=(x)=>{return x*x}

function greet(name="xyz"){
    console.log(`${name}`)
}

//loops
for (let i=0;i<10;i++){
    console.log(i);
}
let i=0;
while (i<10){
    i++;
}

let arr=[1,2,3];
arr.push(4);
arr.pop();
arr.length;

//objects
let person={
    name:"abdullah",
    age:22,
    
}
console.log(person.name);
console.log(person["name"]);

class animal{
    constructor (name){
        this.name=name;
    }
}