// for loop

for(let i=1; i<=10; i++){
    console.log(`Number is ${i}`);
}

// While loop

let count=1;
while(count<=3){
    console.log(`Count is : ${count}`);
    count++;
}

// Do while loop 

let x=10;
do{
    console.log(`Runing ${x}`);
}while(x<5);

// Break and Continue 

for(let num=1; num<=20; num++){

    if(num===5){
        continue;
    }

    if(num===10){
        break;
    }

     console.log(num);
}