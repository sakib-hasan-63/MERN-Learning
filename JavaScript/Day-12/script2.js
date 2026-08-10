// Callback function : is a function passed into another function as a argument

function greet(name){
    console.log(`Hello ${name}`);
}

function processUserInput(callback){
    let name = "sakib";
    callback(name);
}
processUserInput(greet);

// Function returning function

function myFun(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans = myFun();
ans();