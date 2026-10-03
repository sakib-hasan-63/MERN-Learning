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