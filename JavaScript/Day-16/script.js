// Iterable
//where we use to for of loop
//like String and Array

let name = "sakib";

for(let n of name){
    console.log(n);
}

let items = [1,2,3,4,5];

for(let item of items){
    console.log(item);
}

// Set (it is iterable)
//only unique value stored

const myArr = [1,2,2,3,4,4,2,22,3];

const numbers = new  Set(myArr);

console.log(numbers);

for(let num of numbers){
    console.log(num);
}