// Element Operator 

//$exists operator find the what id actual exixts in database
db.student.find({id:{$exists:true}})


// $type operator it check the field data types 
db.student.find({id:{$type:'number'}}) //we can also write the int instead  of number


// $size it mostly perform the array and array of an object 
// here it find the which student have 3 hobbies
db.users.find({ hobbies: { $size: 3 } })
