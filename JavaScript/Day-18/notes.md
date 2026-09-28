# JavaScript Function Methods: call(), apply(), and bind()

## Introduction

`call()`, `apply()`, and `bind()` are JavaScript Function methods.

They are mainly used to control the value of `this` inside a function.

---

## 1. call()

`call()` calls a function immediately and allows us to specify what
`this` should refer to.

### Syntax

```js
function.call(object, argument1, argument2);