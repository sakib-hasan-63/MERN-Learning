// Rest parameter

function totalSum(num1, num2, ...args){
    let sum = 0;
    // if i want to sum of total number
   // sum = num1 + num2;
    for(let i in args){
        sum += args[i]; 
    }
    console.log(` The Sum is : ${sum}`);
}

totalSum(12,43,54,66);
totalSum(344,444,4,23);