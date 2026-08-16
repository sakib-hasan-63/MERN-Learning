# MongoDB Element Operators

Element operators are used to check the **existence** and **data type** of fields in MongoDB documents.

The main element operators are:

* `$exists`
* `$type`

The `$size` operator is commonly used with arrays.

---

## 1. `$exists` Operator

The `$exists` operator checks whether a field **exists in a document or not**.

### Syntax

```javascript
db.collection.find({
  field: { $exists: true }
})
```

### Example

```javascript
db.student.find({
  id: { $exists: true }
})
```

This query finds all students where the `id` field exists.

### `$exists: false`

We can also find documents where a field does **not exist**.

```javascript
db.student.find({
  id: { $exists: false }
})
```

This finds students who do not have an `id` field.

### Easy Way to Remember

```text
$exists: true  → Field exists
$exists: false → Field does not exist
```

---

## 2. `$type` Operator

The `$type` operator checks the **data type of a field**.

### Syntax

```javascript
db.collection.find({
  field: { $type: "dataType" }
})
```

### Example

```javascript
db.student.find({
  id: { $type: "number" }
})
```

This finds documents where the `id` field contains a **number**.

We can also use:

```javascript
db.student.find({
  id: { $type: "int" }
})
```

### Common Data Types

| Type       | Meaning        |
| ---------- | -------------- |
| `"string"` | Text           |
| `"number"` | Number         |
| `"int"`    | Integer        |
| `"double"` | Decimal number |
| `"bool"`   | Boolean        |
| `"array"`  | Array          |
| `"object"` | Object         |
| `"null"`   | Null value     |

### Example

Find students whose `name` is a string:

```javascript
db.student.find({
  name: { $type: "string" }
})
```

---

## 3. `$size` Operator

The `$size` operator is mainly used with **arrays**.

It checks the **number of elements inside an array**.

### Example

Suppose we have:

```javascript
{
  name: "Rahul",
  hobbies: ["Reading", "Gaming", "Cricket"]
}
```

The `hobbies` array contains **3 elements**.

We can find such students using:

```javascript
db.users.find({
  hobbies: { $size: 3 }
})
```

This query finds users who have exactly **3 hobbies**.

### Another Example

```javascript
db.users.find({
  hobbies: { $size: 2 }
})
```

This finds users whose `hobbies` array contains exactly **2 elements**.

---

## Quick Revision

### `$exists`

Checks whether a field exists.

```javascript
db.student.find({
  id: { $exists: true }
})
```

### `$type`

Checks the data type of a field.

```javascript
db.student.find({
  id: { $type: "number" }
})
```

### `$size`

Checks the number of elements in an array.

```javascript
db.users.find({
  hobbies: { $size: 3 }
})
```

---

## Easy Memory Trick

```text
$exists → Does the field exist?
$type   → What is the field's data type?
$size   → How many elements are in the array?
```

---

## Important Note

`$size` works with arrays.

For example:

```javascript
hobbies: ["Reading", "Gaming", "Cricket"]
```

Here:

```text
$size: 3
```

matches because the array has exactly **3 elements**.
