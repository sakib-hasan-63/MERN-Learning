# MongoDB Cursor Methods & Logical Operators

## Cursor Methods

Cursor methods are used to control and process the documents returned by a MongoDB query.

### 1. `count()`

Counts the number of documents.

```js
db.student.find().count()
```

> `countDocuments()` is preferred in modern MongoDB.

---

### 2. `limit()`

Returns only a specific number of documents.

```js
db.student.find().limit(3)
```

**Meaning:** Returns only 3 documents.

---

### 3. `skip()`

Skips a specific number of documents.

```js
db.student.find().skip(1)
```

**With `limit()`:**

```js
db.student.find().skip(1).limit(2)
```

**Meaning:** Skip 1 document and return the next 2.

---

### 4. `sort()`

Sorts documents in ascending or descending order.

* `1` → Ascending
* `-1` → Descending

```js
db.student.find().sort({ age: 1 })
```

```js
db.student.find().sort({ age: -1 }).limit(5)
```

**Meaning:** Returns the 5 oldest students.

---

### 5. `pretty()`

Makes the output easier to read.

```js
db.student.find().pretty()
```

---

### 6. `next()`

Returns the next document from the cursor.

```js
db.student.find().next()
```

---

### 7. `hasNext()`

Checks whether another document is available.

```js
db.student.find().hasNext()
```

Returns:

```text
true
```

or

```text
false
```

---

### 8. `forEach()`

Runs a function for every document.

```js
db.student.find().forEach((doc) => {
    print(`Name: ${doc.name}, Age: ${doc.age}`);
});
```

---

### 9. `map()`

Creates a new array by extracting or transforming data.

```js
const nameList = db.student.find().map((doc) => {
    return doc.name;
});

print(nameList);
```

**Output:**

```text
[ "Rahul", "Aman", "Priya" ]
```

---

# Logical Operators

Logical operators are used to apply multiple conditions in MongoDB queries.

## `$and`

Returns documents when **all conditions are true**.

```js
db.student.find({
    $and: [
        { age: { $gt: 19 } },
        { name: "Amit Patel" }
    ]
})
```

**Meaning:**

```text
age > 19 AND name = "Amit Patel"
```

---

## `$or`

Returns documents when **at least one condition is true**.

```js
db.student.find({
    $or: [
        { gpa: { $gt: 7 } },
        { name: "Amit Patel" }
    ]
})
```

**Meaning:**

```text
gpa > 7 OR name = "Amit Patel"
```

---

## `$nor`

Returns documents when **none of the conditions are true**.

```js
db.student.find({
    $nor: [
        { gpa: { $gt: 8 } },
        { name: "Hardik Pandya" }
    ]
})
```

**Meaning:**

```text
gpa is NOT greater than 8
AND
name is NOT "Hardik Pandya"
```

---

## `$not`

Negates a condition.

```js
db.student.find({
    age: {
        $not: {
            $gt: 20
        }
    }
})
```

**Meaning:**

```text
age is NOT greater than 20
```

---

# Quick Revision

| Method / Operator | Purpose                             |
| ----------------- | ----------------------------------- |
| `count()`         | Count documents                     |
| `limit()`         | Limit results                       |
| `skip()`          | Skip documents                      |
| `sort()`          | Sort results                        |
| `pretty()`        | Readable output                     |
| `next()`          | Get next document                   |
| `hasNext()`       | Check next document                 |
| `forEach()`       | Run function for every document     |
| `map()`           | Create a new array                  |
| `$and`            | All conditions must be true         |
| `$or`             | At least one condition must be true |
| `$nor`            | None of the conditions are true     |
| `$not`            | Negate a condition                  |

## Easy Memory Trick

```text
$and  → ALL true
$or   → ANY true
$nor  → NONE true
$not  → NOT true
```

---

## What I Practiced

* MongoDB Cursor Methods
* `count()`
* `limit()`
* `skip()`
* `sort()`
* `pretty()`
* `next()`
* `hasNext()`
* `forEach()`
* `map()`
* Logical Operators
* `$and`
* `$or`
* `$nor`
* `$not`
