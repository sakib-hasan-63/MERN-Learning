// Spered Operators

const fruits=["Apple","Banana","Kevi"];
const fruits2=["PineApple","BlueBerry","Watermelon"];

const compleFruits=[...fruits,...fruits2];

console.log(compleFruits);

// For loop in array

for(let i=1; i<compleFruits.length; i++){
    console.log(compleFruits[i]);
}

// use const for creating array 

const arr=[1,2,3,4,5];
arr.push(6);
arr.unshift(0);
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);