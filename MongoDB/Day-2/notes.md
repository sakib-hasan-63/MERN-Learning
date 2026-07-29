# MongoDB Notes - Insert Operations

## Create Collection

You can create a collection in two ways:

```javascript
// Method 1: Directly create a collection
db.createCollection("Student")

// Method 2: Collection is created automatically when you insert data
db.student.insertOne({})
```

If the collection does not exist yet, MongoDB creates it automatically the first time you insert a document.

## Insert Many Documents

```javascript
db.student.insertMany([{}, {}, {}, {}])
```

This inserts multiple documents into the collection at once.

## Duplicate `_id` Behavior

Every document has a unique `_id` field. If you try to insert a document with an `_id` that already exists in the collection, MongoDB will reject it.

**By default, `insertMany` stops at the first error:**

- If Document 1 has a unique `_id`, it gets inserted successfully.
- If Document 2 has a duplicate `_id`, it fails.
- All documents **after** Document 2 are **not inserted**, even if they are valid.

This default behavior is called **ordered insert**.

## Inserting All Valid Documents (Skip Only the Bad Ones)

**Problem:** Suppose you have 100 documents. Some of them have errors (like duplicate `_id`). You want MongoDB to:

- Insert all the **correct** documents.
- Skip only the **wrong** documents.
- Continue inserting the rest, instead of stopping.

**Solution:** Use the `{ ordered: false }` option.

```javascript
db.student.insertMany(
  [
    { name: "Aarav Mehta", age: "22", city: "Lucknow", course: "B.Tech" },
    { name: "Ananya Roy", age: "20", city: "Kolkata", course: "B.Sc" },
    { name: "Kabir Das", age: "23", city: "Varanasi", course: "BA" }
  ],
  { ordered: false }
)
```

### How `ordered: false` works

- MongoDB tries to insert **every** document in the array.
- If one document fails (example: duplicate `_id`), MongoDB **skips it** and moves on to the next one.
- All valid documents get inserted successfully.
- Only the failed (wrong) documents are left out.

### Summary Table

| Option | Behavior on Error |
|---|---|
| `ordered: true` (default) | Stops at the first error. Documents after it are not inserted. |
| `ordered: false` | Skips the failed document and continues inserting the rest. |
