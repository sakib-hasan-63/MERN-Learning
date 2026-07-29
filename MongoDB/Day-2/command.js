//Create Collection
db.createCollection("Student")
         or
db.student.insertOne({})

// Insert Many Documents
db.student.insertMany([{},{},{},{}])

// If i will use same ObjectId for a one field its not insert the data
// If i will insert multiple data then where is duplicate id that is not insert
// Example if document one is unique id then it is insert and document 2 has duplicate id then rest of the document not insert


// If i have 100 document and all the document insert in database but i have many wrong document but i want to all document insert and which is wrong document its not insert
// And where use is {ordered:false}

db.student.insertMany(
  [
    { name: "Aarav Mehta", age: "22", city: "Lucknow", course: "B.Tech" },
    { name: "Ananya Roy", age: "20", city: "Kolkata", course: "B.Sc" },
    { name: "Kabir Das", age: "23", city: "Varanasi", course: "BA" }
  ],
  { ordered: false }
)