# MongoDB - Import, Export & Comparison Operators

## Import JSON File

Use `mongoimport` to import a JSON file into MongoDB.

### Syntax

```bash
mongoimport --db databaseName --collection collectionName --file data.json --jsonArray
```

### Example

```bash
mongoimport --db myDB --collection student --file student.json --jsonArray
```

---

## Export Data

Use `mongoexport` to export data from MongoDB into a JSON file.

### Syntax

```bash
mongoexport --db databaseName --collection collectionName --out data.json
```

### Example

```bash
mongoexport --db myDB --collection student --out student.json
```

---

# Comparison Operators

Comparison operators are used to compare values in MongoDB queries.

## 1. $eq (Equal)

Find documents where the value is equal.

```javascript
db.student.find({ age: { $eq: 20 } })
```

---

## 2. $ne (Not Equal)

Find documents where the value is not equal.

```javascript
db.student.find({ age: { $ne: 20 } })
```

---

## 3. $gt (Greater Than)

Find values greater than the given value.

```javascript
db.student.find({ age: { $gt: 20 } })
```

---

## 4. $gte (Greater Than or Equal)

```javascript
db.student.find({ age: { $gte: 20 } })
```

---

## 5. $lt (Less Than)

```javascript
db.student.find({ age: { $lt: 20 } })
```

---

## 6. $lte (Less Than or Equal)

```javascript
db.student.find({ age: { $lte: 20 } })
```

---

# Summary

- `mongoimport` → Import JSON data into MongoDB.
- `mongoexport` → Export MongoDB data into a JSON file.
- `$eq` → Equal
- `$ne` → Not Equal
- `$gt` → Greater Than
- `$gte` → Greater Than or Equal
- `$lt` → Less Than
- `$lte` → Less Than or Equal

---

# Key Points

- Import data using **mongoimport**
- Export data using **mongoexport**
- Comparison operators help filter documents.
- Use `find()` to retrieve matching documents.