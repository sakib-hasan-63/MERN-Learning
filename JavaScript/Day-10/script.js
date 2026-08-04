// object in array

let users = [
    {id:1, name:"Sakib", age:20, city:"Lucknow"},
    {id:3, name:"Salman", age:21, city:"Bihar"},
    {id:2, name:"Zaid", age:23, city:"Azamgarh"}
]

console.log(users)

// Loop object in array
for(let user of users){
    console.log(user)
}

// print key value pair

for (let user of users) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, City: ${user.city}`)
}

// Nested Destructuring

let [user1,user2,user3]=users;

console.log(user1);

// Destructuring diffrent type

let [{name:user1Name},{age:user2Age},{city:user3City}] = users;

console.log(`Name ${user1Name} and Age ${user2Age} and City ${user3City}`);