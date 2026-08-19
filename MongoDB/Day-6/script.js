//Projection

db.student.find({'hobbies': {$size:2}},{hobbies:1,id:0}) // 1 means show and 0 menas not show

db.student.find({'hobbies': {$size:2}},{hobbies:1,name:1}) 

//Embedded document

db.student.find({'hobbies.user':'sakib'}) //it show the only sakib hobbies

db.student.find({'hobbies.user': {$gt:5}}) // it show the data whose user have 5 hobbies

db.student.find({'hobbies.user':'sakib', 'metadata.likes': {$gt:50}}) //it show the data whose name user name is sakib and its like greter then 50


