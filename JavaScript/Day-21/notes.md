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


# Asynchronous JavaScript - Study Notes

## 1. Single-Threaded Nature
* JavaScript is a **single-threaded language**, meaning it can only execute one thing at a time (it has a single Call Stack).
* Asynchronous JS allows heavy or time-taking tasks (like API calls, timers) to run in the background without blocking the rest of the code (**non-blocking**).

---

## 2. How It Works (The Mechanism)
* **Call Stack:** Where code is executed line-by-line.
* **Web APIs / Node APIs:** Async tasks (like `setTimeout`, `fetch`) are handed over here so the stack remains free.
* **Callback Queue (Task Queue):** Once an async task completes, its callback function waits here.
* **Event Loop:** It continuously checks if the Call Stack is empty. If it is, it moves the function from the queue to the stack for execution.

---

## 3. Three Main Ways to Handle Async Code

### A. Callbacks (The Traditional Way)
* Passing a function as an argument inside another function.
* **Problem:** Nested callbacks lead to **Callback Hell** (Pyramid of Doom), making the code hard to maintain.

### B. Promises (The Better Way)
* A Promise is an object representing the eventual completion or failure of an async task.
* **3 States:** 
  1. `Pending` (operation is ongoing)
  2. `Fulfilled` (completed successfully - `.then()`)
  3. `Rejected` (error occurred - `.catch()`)

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Data received!");
    else reject("An error occurred!");
  }, 1000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));