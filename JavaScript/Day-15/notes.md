# JavaScript `splice()` Method

The `splice()` method is used to **add, remove, or replace elements** in an array.

> ⚠️ `splice()` changes the original array.

## Syntax

```js
array.splice(start, deleteCount, item1, item2, ...);
```

* **start** → Index where the operation starts
* **deleteCount** → Number of elements to remove
* **items** → Elements to add

---

## 1. Delete Elements

```js
const myarr = ["item1", "item2", "item3"];

const deletedItem = myarr.splice(1, 1);

console.log(deletedItem); // ["item2"]
console.log(myarr);       // ["item1", "item3"]
```

`splice(1, 1)` means:

* Start from index `1`
* Delete `1` element

---

## 2. Insert Elements

To insert without deleting anything, use `deleteCount = 0`.

```js
const arr = [10, 20, 30, 40, 50];

arr.splice(5, 0, 60);

console.log(arr);
// [10, 20, 30, 40, 50, 60]
```

---

## 3. Delete and Insert

`splice()` can delete existing elements and insert new elements at the same position.

```js
const arr = [1, 2, 3, 4, 5];

const deleted = arr.splice(0, 2, 8, 9, 10);

console.log(deleted);
// [1, 2]

console.log(arr);
// [8, 9, 10, 3, 4, 5]
```

Here:

```js
arr.splice(0, 2, 8, 9, 10);
```

Means:

* Start from index `0`
* Delete `2` elements → `1, 2`
* Insert `8, 9, 10`

---

## Quick Revision 🧠

| Operation       | Example                   |
| --------------- | ------------------------- |
| Delete          | `arr.splice(1, 2)`        |
| Insert          | `arr.splice(1, 0, "new")` |
| Delete + Insert | `arr.splice(1, 2, "new")` |

### Remember

**`splice()` = Add + Remove + Replace**

And it **modifies the original array**.
