# JavaScript OOPs

**OOPs = Object-Oriented Programming**

OOPs means representing real-world things using **objects**.

## 4 Pillars of OOPs

### 1. Encapsulation

Data and methods ko ek place par rakhna.

**Example:** ATM → balance + deposit/withdraw methods.

```js
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}
```

**Remember:** Data + Methods together.

---

### 2. Inheritance

Ek class doosri class ke features use kar sakti hai.

**Example:** Animal → Dog

```js
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
```

**Remember:** Parent → Child features.

---

### 3. Polymorphism

Same method name, but different behavior.

```js
class Dog {
    sound() {
        console.log("Bark");
    }
}

class Cat {
    sound() {
        console.log("Meow");
    }
}


**Remember:** Same method → Different behavior.

---

### 4. Abstraction

Unnecessary internal details ko hide karna aur important functionality show karna.

**Example:** Car → `start()` use karte hain, engine ka internal process nahi dekhte.

**Remember:** Hide complexity → Show important part.

---

## Important Keywords

* `class` → Blueprint
* `object` → Class ka instance
* `constructor` → Object create hone par automatically run hota hai
* `this` → Current object ko refer karta hai
* `new` → New object create karta hai

## Quick Revision

text
Encapsulation → Data + Methods
Inheritance   → Parent → Child
Polymorphism  → Same method → Different behavior
Abstraction   → Hide complexity

