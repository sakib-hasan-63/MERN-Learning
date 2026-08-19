# MongoDB Projection and Embedded Documents

## 1. Projection

**Projection** is used to control which fields MongoDB should **show or hide** in the result.

### Syntax

```javascript
db.collection.find(
  { filter },
  { field: 1, field: 0 }
)
```

* `1` → Show the field
* `0` → Hide the field

### Example 1

```javascript
db.student.find(
  { hobbies: { $size: 2 } },
  { hobbies: 1, id: 0 }
)
```

This query:

* Finds students who have exactly **2 hobbies**
* Shows the `hobbies` field
* Hides the `id` field

### Example 2

```javascript
db.student.find(
  { hobbies: { $size: 2 } },
  { hobbies: 1, name: 1 }
)
```

This shows only the selected fields:

* `hobbies`
* `name`

### Important Rule

Usually, we should not mix `1` and `0` for different fields.

For example:

```javascript
{ name: 1, hobbies: 1 }
```

means **show** these fields.

```javascript
{ id: 0, age: 0 }
```

means **hide** these fields.

The main exception is the `_id` field, which can be excluded while including other fields.

---

# 2. Embedded Documents

An **embedded document** means a document/object is stored inside another document.

Example:

```javascript
{
  name: "Rahul",
  hobbies: {
    user: "sakib",
    type: "coding"
  },
  metadata: {
    likes: 100
  }
}
```

Here:

* `hobbies` is an embedded document.
* `metadata` is also an embedded document.

---

## Dot Notation

MongoDB uses **dot notation (`.`)** to access fields inside embedded documents.

### Example 1

```javascript
db.student.find({
  "hobbies.user": "sakib"
})
```

This finds documents where the `user` field inside `hobbies` is `"sakib"`.

### Example 2

```javascript
db.student.find({
  "hobbies.user": { $gt: 5 }
})
```

This finds documents where the `hobbies.user` value is greater than `5`.

> **Note:** If `hobbies.user` contains a username such as `"sakib"`, `$gt: 5` is not appropriate. `$gt` should be used with comparable numeric/date/string values according to the stored data type.

---

## Multiple Conditions

We can use multiple conditions in the same query.

```javascript
db.student.find({
  "hobbies.user": "sakib",
  "metadata.likes": { $gt: 50 }
})
```

This finds documents where:

1. `hobbies.user` is `"sakib"`
2. `metadata.likes` is greater than `50`

Both conditions must match.

---

# Quick Revision

### Projection

```javascript
{ name: 1 }
```

→ Show `name`

```javascript
{ name: 0 }
```

→ Hide `name`

---

### Embedded Document

Use **dot notation** to access nested fields:

```javascript
"hobbies.user"
```

```javascript
"metadata.likes"
```

---

## Easy Memory Trick

```text
Projection
1 → Show
0 → Hide

Embedded Document
. → Go inside the object

Example:
"hobbies.user"
     ↓
hobbies → user
```

---

## Practice Examples

Find students whose `name` is `"Sakib"` and show only their `name` and `hobbies`:

```javascript
db.student.find(
  { name: "Sakib" },
  { name: 1, hobbies: 1, _id: 0 }
)
```

Find students whose `metadata.likes` is greater than `100`:

```javascript
db.student.find({
  "metadata.likes": { $gt: 100 }
})
```
