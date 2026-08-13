# JavaScript Array Methods

## Shopping Cart Example

This example demonstrates how to use common JavaScript array methods with a shopping cart.

```js
const cart = [
  { name: "Shirt", price: 500, inStock: true },
  { name: "Pants", price: 1200, inStock: false },
  { name: "Shoes", price: 2000, inStock: true },
  { name: "Socks", price: 100, inStock: true }
];
```

---

## 1. `forEach()`

`forEach()` runs a function for **each item** in an array.

```js
cart.forEach((shop) => {
  console.log(
    `Name: ${shop.name}, Price: ${shop.price}, Stock: ${shop.inStock}`
  );
});
```

**Use:** Display or perform an action on every product.

---

## 2. `filter()`

`filter()` returns a **new array** containing only the items that match a condition.

```js
const ans1 = cart.filter(item => item.inStock);

console.log(ans1);
```

**Use:** Get only products that are currently in stock.

**Result:** Shirt, Shoes and Socks.

---

## 3. `map()`

`map()` creates a **new array** by transforming every item.

```js
const ans2 = cart.map(item => item.price * 0.9);

console.log(ans2);
```

Here, `0.9` means the price is reduced by **10%**.

**Example:**

```text
500  → 450
1200 → 1080
2000 → 1800
100  → 90
```

**Use:** Calculate discounts or transform data.

---

## 4. `reduce()`

`reduce()` combines all array values into a **single result**.

```js
const ans3 = cart.reduce(
  (total, item) => total + item.price,
  0
);

console.log(ans3);
```

**Result:**

```text
3800
```

**Use:** Calculate totals such as:

* Total price
* Total quantity
* Total sales
* Average or combined values

---

## Quick Revision

| Method      | Purpose                            | Returns      |
| ----------- | ---------------------------------- | ------------ |
| `forEach()` | Performs an action on each item    | `undefined`  |
| `filter()`  | Selects items based on a condition | New Array    |
| `map()`     | Transforms each item               | New Array    |
| `reduce()`  | Combines items into one value      | Single Value |

## Easy Memory Trick

```text
forEach → Do something for every item
filter  → Select items
map     → Change/transform items
reduce  → Make one final result
```

## Key Learning

These methods are very important in real-world JavaScript development, especially when working with **shopping carts, product lists, APIs, React state and databases**.
