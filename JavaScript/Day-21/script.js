// Hoisting
sayHello();

function sayHello(){
    console.log("hello JS");
}

// Closure 
function createCounter() {
  let count = 0; // This variable is enclosed

  return function() {
    count++; // The inner function accesses 'count'
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3