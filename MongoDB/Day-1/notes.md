# MongoDB Day 1: Core Fundamentals & Commands

MongoDB is a document-oriented NoSQL database that stores data in flexible BSON format.
*(Name Origin: From **hu-MONGO-us** data).*

---

### 1. Hierarchy & Basics
`Database ──► Collection ──► Document (JSON/BSON)`

---

### 2. General Shell Commands
* `mongosh` — Connect to MongoDB Shell
* `show dbs` — List all databases
* `db` — Display active database
* `cls` — Clear terminal screen

---

### 3. Database Operations
* **Create / Switch DB:** `use company` *(DB is created when data is inserted)*
* **Drop Current DB:** `db.dropDatabase()`

---

### 4. Collection Operations
* **Create Collection:** `db.createCollection("users")`
* **Show Collections:** `show collections`
* **Delete Collection:** `db.users.drop()`

---

### 5. Insert & View Data
* **Insert One Document:**
  ```javascript
  db.users.insertOne({ name: "Alex", age: 25, role: "Developer" })