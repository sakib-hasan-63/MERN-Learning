// Class and Object
class student{
    constructor(name,age,mark){
    this.name = name;
    this.age = age;
    this.mark = mark;
    }
     
    study(){
        console.log(` ${this.name} is Studying`);
    }
}

const s = new student("sakib");
s.study();

// Encapsulation

class bankAccout{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    checkBal(){
       console.log( this.balance);
    }
}

const account = new bankAccout("sakib",50000);
account.deposit(5000);
account.checkBal();

// Inheritance
class Animal{
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();

//Polymorphism

class Dog2{
    sound(){
        console.log("bark");
    }
}
class Cat{
    sound(){
        console.log("meow");
    }
}

const d = new Dog2();
const c = new Cat();

d.sound();
c.sound();

// Abstraction

class Car{
    start(){
        this.#checkEngine();
        console.log("Car Started");;
    }

    #checkEngine(){
        console.log("Checking Engine");
    }
}

const car = new Car();
car.start();
