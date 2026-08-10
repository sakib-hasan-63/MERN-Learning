// Block Scope vs Functional Scope
// let and const are block scope 
// var is functional scope

// Block Scope
{
    name="sakib";
    console.log(name);
    var say="hello2";
}

// functional Scope 
function greet(){
   var say="hello";
    console.log(say);
}
greet();
console.log(say); //print hello2

// Default parameter

function add(a,b=10){
    return (a+b);
}
const ans = add(20);
console.log(ans);

// Rest parameter

function addAll(...nums){
    let total =0;
    for(let num of nums){
    total = total+num;
    }
    return total;
}
 const myAns = addAll(12,23,44,4,56);
console.log(myAns);

// parameter Destructuring

const person = {
    name :"sakib",
    age:20,
    add:"lucknow"
}

function showData({name,age,add}){
    console.log(name);
    console.log(age);
    console.log(add);
}
showData(person);