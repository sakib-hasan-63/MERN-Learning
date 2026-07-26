// Create the databe
use StudentDB 

// See the data base to run this command
show dbs / show databases

// Create collection
db.createColletion("Students")

// Insert one document
db.Students.insertOne({
    "Name":"Sakib",
    "Age":20,
    "City":"Lucknow"
})

// Show Collection
show collections

// Show all documents 
db.Students.find()

// Delete only Students Collection
db.Students.drop()

// Delete the all Database
db.dropDatabase()