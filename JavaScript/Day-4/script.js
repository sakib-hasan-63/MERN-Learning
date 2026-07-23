// Operators are symbol that perform any specific task
// types of operator

// 1.Arithmetic Operators
// 2.Assignment Operators
// 3.Comparison Operators
// 4.Logical Operators
// 5.Ternary Operator

// 1.Arithmetic Operators

let num1=10;
let num2=20;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

// 2.Assignment Operators

let x=10;
console.log(x);
x+=5;
console.log(x);
x-=5;
console.log(x);
x/=5;
console.log(x);
x%=5;
console.log(x);

// 3.Comparison Operators

let a=10;
let b=20;

console.log(a==b); //false
console.log(a!=b); //true
console.log(a>b); //false
console.log(a<b); //true
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a===b); //false

// 4.Logical Operators

let age = 20;

console.log( age > 18 && age < 30); //true
console.log( age > 18 || age < 15); //true
console.log(!( age == 20 )); //false

// 5.Ternary Operator

let age2 = 18;
let result = age2 >= 18 ? "Adult" : "Child";
console.log(result);