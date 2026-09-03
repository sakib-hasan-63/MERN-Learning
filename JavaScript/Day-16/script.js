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

// map 

const person = new Map();
person.set('name','harsit');
person.set('age',20);
person.set('add','lko');
console.log(person);
console.log(person.get('name'));

// Check if key exists
console.log(person.has('age')); // true

// Get total count
console.log(person.size); // 3

// Delete a key
person.delete('add');

// Loop through Map
for (let [key, value] of person) {
  console.log(`${key}: ${value}`);
}