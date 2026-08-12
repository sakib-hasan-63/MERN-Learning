// Cursor Method

// count() method how many document avilable in the database

db.student.find().count()

//limit() method if we want to show only specific amount of document

db.student.find().limit(3)

// skip() method its skib the how many number of amount we pass the as a argument

 db.student.find().limit(2).skip(1)

 // sort() method it is a sort as a asending order or desending order (1 for ASC, -1 for DESC).

 db.student.find().sort({ 'age': -1 }).limit(5)

 //pretty() its make more readable to JSON data

 db.student.find().pretty()

 // next() method show only next documnet in the database

  db.student.find().next()

  //hasNext() is a cursor method used to check whether another document is available in the result set. It returns a Boolean value (true or false).

  db.student.find().hasNext()

  // forEach() in mongosh Executes a function for every document in the result set. It does not return anything (undefined).

// Print the name and age of each student
db.student.find().forEach((doc) => {
  print(`Name: ${doc.name}, Age: ${doc.age}`);
});

//map() in mongosh Iterates over each document, extracts or transforms the specified fields, and returns an Array.

// Extract all student names into an array
const nameList = db.student.find().map((doc) => {
  return doc.name;
});

// Output the result
print(nameList); 
// Output: [ "Rahul", "Aman", "Priya" ]

// Logical Operator and or not and nor

// And Operator it show the document if both condition is true
 db.student.find({$and:[{ age: { $gt: 19 }, name: "Amit Patel" }]})

 // Or Operator it show the one condition is true

  db.student.find({$or:[{gpa: {$gt: 7}},{name: 'Amit Patel'}]})

  // NOR Operator its show the both condition false document

   db.student.find({$nor:[{gpa:{$gt:8}},{name:'Hardik Pandya'}]})

   // NOt Operator show the that not true the condtion

   db.student.find({age:{$not:{$gt:20}}})


