# Optional Chaining in JavaScript

## What is Optional Chaining?

Optional Chaining (`?.`) is a JavaScript feature used to safely access
a property or method that may not exist.

If the property before `?.` is `null` or `undefined`,
JavaScript returns `undefined` instead of throwing an error.

---

## 1. Without Optional Chaining

```js
const user = {};

console.log(user.profile.name);