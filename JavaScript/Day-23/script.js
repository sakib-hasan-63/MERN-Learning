// Rest parameter

function totalSum(num1, num2, ...args){
    let sum = 0;
    // if i want to sum of total number
   // sum = num1 + num2;
    for(let i in args){
        sum += args[i]; 
    }
    console.log(` The Sum is : ${sum}`);
}

totalSum(12,43,54,66);
totalSum(344,444,4,23);

// Spread Operator

let arr1 = [10,20,30,40,50];
let arr2 = [32,34,54,78];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Object Literals

const user = {
  name: "Sakib",
  age: 21,
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  address: {
    city: "Lucknow",
    country: "India"
  },
  // Method inside object
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};