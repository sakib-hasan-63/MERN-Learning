// Splice Method

const myarr = ["item1", "item2", "item3"];

myarr.splice(1,1);

const deleteItem = myarr.splice(1,2);

console.log(`Deleted item ${deleteItem}`);

console.log(myarr)

// Insert

const arr1 = [10,20,30,40,50];

arr1.splice(5,0,60);

console.log(arr1);

// Delete And Insert

const arr = [1,2,3,4,5];

const deletee = arr.splice(0,2,8,9,10);

console.log(deletee)

console.log(arr);