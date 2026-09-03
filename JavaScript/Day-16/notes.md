# JavaScript Iterable, Set & Map

## 1. Iterable

An **iterable** is a value that can be looped through using a `for...of` loop.

Common iterables:

* String
* Array
* Set
* Map

### String

```js
let name = "sakib";

for (let n of name) {
    console.log(n);
}
```

Output:

```text
s
a
k
i
b
```

### Array

```js
let items = [1, 2, 3, 4, 5];

for (let item of items) {
    console.log(item);
}
```

---

## 2. Set

A `Set` stores **only unique values**.

```js
const myArr = [1, 2, 2, 3, 4, 4, 2, 22, 3];

const numbers = new Set(myArr);

console.log(numbers);
```

Output:

```text
Set(5) { 1, 2, 3, 4, 22 }
```

Since `Set` is iterable, we can use `for...of`:

```js
for (let num of numbers) {
    console.log(num);
}
```

### Key Point

**Set → Stores unique values**

---

## 3. Map

A `Map` stores data in **key-value pairs**.

```js
const person = new Map();

person.set("name", "harsit");
person.set("age", 20);
person.set("add", "lko");

console.log(person);
```

### Get a Value

```js
console.log(person.get("name"));
```

Output:

```text
harsit
```

### Check if Key Exists

Use `has()`:

```js
console.log(person.has("age")); // true
```

### Get Total Count

Use `size`:

```js
console.log(person.size); // 3
```

### Delete a Key

```js
person.delete("add");
```

### Loop Through Map

```js
for (let [key, value] of person) {
    console.log(`${key}: ${value}`);
}
```

Output:

```text
name: harsit
age: 20
```

---

## Quick Revision 🧠

| Concept      | Meaning                        |
| ------------ | ------------------------------ |
| **Iterable** | Can be looped using `for...of` |
| **Set**      | Stores unique values           |
| **Map**      | Stores key-value pairs         |

### Remember

* `for...of` → Iterate values
* `Set` → Unique values
* `Map` → Key + Value
* `map.get(key)` → Get value
* `map.has(key)` → Check key
* `map.size` → Count entries
* `map.delete(key)` → Delete entry
