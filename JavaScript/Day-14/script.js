// Sort method

// besically it proper work at string
// and in the case of number we have to pass callback function then it is work asc and dsc
// sort method change the array 
// if we want to dont change our original array then we use to slice() method

let str = ["sakib","ayan","vali","rehan","tahseen"];
 const ans = str.sort();
console.log(ans)

// in case of number 
//Assending order
let num = [12,33,4,55,3444,55,56,6666];
const ans2 = num.sort((a,b)=> a-b);
console.log(ans2)

// Desending Order

let num2 = [12,33,4,55,3444,55,56,6666];
const ans3 = num2.sort((a,b)=> b-a);
console.log(ans3)

// Find Method

const myarr = ["cat","dog","lion","elephent","monkey"];

function isLength4(str){
    return (str.length === 4);
}

const myans = myarr.find(isLength4)
const myans2 = myarr.find((str)=> str.length === 6); // it is also do same things in one line
console.log(myans)
console.log(myans2)

// Real World use case

const users =[
    {userId:1 , name:"sakib"},
    {userId:2 , name:"kaif"},
    {userId:3 , name:"saif"},
    {userId:4 , name:"Sakib Hasan"}
];

const findUser4 = users.find((user)=> user.userId === 4);
console.log(findUser4);

//Every method
// It Return the true if all value is even
// Otherwise its return False

const arr = [10,20,6,4,2,8];

function isEven(arr){
    return (arr % 2 === 0);
}

const myAns= arr.every(isEven);
console.log(myAns);

// Real World Use Case

const userCart=[
    {name : "sakib", age : 20 , city: "Lucknow" },
    {name : "vali", age : 19 , city: "Bahraich" },
    {name : "Tahseen", age : 23 , city: "Lucknow" }
];

const Myans = userCart.every((cartItem) => cartItem.age > 18);

console.log(Myans);

// Some Method
// If one number is Even its return true otherwise false

const number = [1,3,5,7,9,4];

 const ansss = number.some((number) => number % 2 === 0);

 console.log(ansss);

