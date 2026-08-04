// Objects

let person = {
    name:"sakib",
    age:20,
    address:"lucknow",
    hobbies:["Music","Cricket","Coding"]
}

// Single value print
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// Add a key value pair in object

person.gender="male";

console.log(person);

// Diffrence between dot and bracket notation
let key = "email"
let person2 = {
    "person hobbies":["music","cricket","coding"]
}
console.log(person2["person hobbies"]);

person2[key]="sakib@gmail.com"

console.log(person2);


// how to use for in loop in object

for(let per in person){
    console.log(`${per}: ${person[per]}`)
}