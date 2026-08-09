// Arrow function is a shorter and cleaner syntax for writing functions without using the function keyword

const greet = (name) =>{
    console.log(`hello ${name}`);
}

greet("sakib");

// One line function 

const add = (a,b) => a+b;

console.log(add(10,20));

//Hoisting
hello();
function hello(){
    console.log("hello world");

// it is work only function initlization not work with arrow fun and function expresion
}

// Function inside the function

function mainFun(){
    let name = "sakib";
    const showName = () =>{
        console.log(`Name is : ${name}`);
        const add = (a,b)=> a+b;
    }
    console.log(add(20,30));
    showName();
}
mainFun();