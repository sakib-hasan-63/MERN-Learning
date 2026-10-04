# JavaScript Hoisting

## 1. What is Hoisting?
Hoisting is a default JavaScript mechanism where **variable and function declarations** are moved to the top of their enclosing scope during the compilation phase (before the code is executed).

---

## 2. Function Hoisting
Function declarations are **fully hoisted**. This means you can call a function before it is declared in the code without getting any errors.

```javascript
// Example: Calling function before declaration
sayHello(); // Output: Hello Rahul!

function sayHello() {
  console.log("Hello Rahul!");
}

# JavaScript Closures 

## What is a Closure?
A **closure** is a function that remembers and has access to variables in its outer (enclosing) scope, even after that outer function has finished executing and returned.

* **Core Concept:** An inner function maintains a persistent reference to its lexical environment (outer scope).
* **Created:** Every time a function is created in JavaScript.

---

## Basic Example

```javascript
function createCounter() {
  let count = 0; // Enclosed variable

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2