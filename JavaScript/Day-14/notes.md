# JavaScript Array Methods

## 1. `sort()`

`sort()` is used to arrange array elements in order.

> ⚠️ `sort()` changes the original array.

### String Sorting

```js
let str = ["sakib", "ayan", "vali", "rehan", "tahseen"];

const ans = str.sort();

console.log(ans);
```

### Number - Ascending Order

```js
let num = [12, 33, 4, 55, 3444, 55, 56, 6666];

const ans = num.sort((a, b) => a - b);

console.log(ans);
```

### Number - Descending Order

```js
const ans = num.sort((a, b) => b - a);
```

### Keep Original Array

Use `slice()` before `sort()`:

```js
const sorted = num.slice().sort((a, b) => a - b);
```

---

## 2. `find()`

`find()` returns the **first element** that matches the condition.

If no element matches, it returns `undefined`.

```js
const myarr = ["cat", "dog", "lion", "elephant", "monkey"];

const ans = myarr.find((str) => str.length === 4);

console.log(ans); // lion
```

### Real-World Example

```js
const users = [
  { userId: 1, name: "sakib" },
  { userId: 2, name: "kaif" },
  { userId: 3, name: "saif" },
  { userId: 4, name: "Sakib Hasan" }
];

const user = users.find((user) => user.userId === 4);

console.log(user);
```

---

## 3. `every()`

`every()` checks whether **all elements** satisfy a condition.

* All match → `true`
* Any one fails → `false`

```js
const arr = [10, 20, 6, 4, 2, 8];

const ans = arr.every((num) => num % 2 === 0);

console.log(ans); // true
```

### Real-World Example

```js
const users = [
  { name: "sakib", age: 20 },
  { name: "vali", age: 19 },
  { name: "Tahseen", age: 23 }
];

const ans = users.every((user) => user.age > 18);

console.log(ans); // true
```

---

## 4. `some()`

`some()` checks whether **at least one element** satisfies a condition.

* One matches → `true`
* None matches → `false`

```js
const numbers = [1, 3, 5, 7, 9, 4];

const ans = numbers.some((num) => num % 2 === 0);

console.log(ans); // true
```

---

## Quick Revision

| Method    | Purpose                                | Returns               |
| --------- | -------------------------------------- | --------------------- |
| `sort()`  | Sorts the array                        | Sorted array          |
| `find()`  | Finds the first matching element       | Element / `undefined` |
| `every()` | Checks if all elements match           | `true / false`        |
| `some()`  | Checks if at least one element matches | `true / false`        |

### Easy Trick 🧠

* **sort** → Arrange
* **find** → First match
* **every** → All?
* **some** → At least one?
