// ========================================
// JavaScript: call(), apply(), and bind()
// ========================================


// ----------------------------------------
// 1. call()
// ----------------------------------------

const user = {
    name: "Sakib"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

greet.call(user);


// call() with arguments

function introduce(age, city) {
    console.log(`My name is ${this.name}`);
    console.log(`I am ${age} years old`);
    console.log(`I live in ${city}`);
}

introduce.call(user, 21, "Lucknow");


// ----------------------------------------
// 2. apply()
// ----------------------------------------

const student = {
    name: "Rahul"
};

introduce.apply(student, [22, "Delhi"]);


// ----------------------------------------
// 3. bind()
// ----------------------------------------

const teacher = {
    name: "Aman"
};

const teacherIntro = introduce.bind(teacher, 30, "Mumbai");

teacherIntro();


// ----------------------------------------
// 4. Comparing call(), apply(), bind()
// ----------------------------------------

const person1 = {
    name: "Sakib"
};

const person2 = {
    name: "Rahul"
};

function sayHello(city) {
    console.log(`Hello ${this.name} from ${city}`);
}


// call()
// Executes immediately
sayHello.call(person1, "Lucknow");


// apply()
// Executes immediately
// Arguments are passed as an array
sayHello.apply(person2, ["Delhi"]);


// bind()
// Returns a new function
const sayHelloSakib = sayHello.bind(person1, "Lucknow");

// Execute later
sayHelloSakib();