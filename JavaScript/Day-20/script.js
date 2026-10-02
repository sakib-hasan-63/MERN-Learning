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
