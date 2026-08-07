// function is the block of code and its perform a specific work.

function greet(){
    console.log("Good Morning");
}
greet();

// function thats take a argument

function add(a,b){
    return a+b;
}
console.log(add(10,20));

// Function Even Odd 

function evenOdd(num){
    if(num%2===0){
        console.log(`Even : ${num}`)
    }
    else{
        console.log(`Odd : ${num}`)
    }
}

evenOdd(115);

// Function string that return a char

function stringChar(anyString){
    return anyString[0];
}
console.log(stringChar("sakib"));

// Function that find a array of target 

function findTarget(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray=[10,20,30,50,60];
const ans = findTarget(myArray,20);
console.log(`Array is present position at ${ans}`);

// Function Expression

const greetUser = function(name){
    console.log(`Good Morning ${name}`);
}
greetUser("sakib");