// If else
let age = 19;
if (age >= 20) {
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible")
}

// if...else if...else statement
let marks = 86;

if (marks >= 90) {
    console.log("Grade : A+");
}
else if (marks >= 75) {
    console.log("Grade : A");
}
else if (marks >= 50) {
    console.log("Grade : B");
}
else {
    console.log("Fail");
}

// Switch Statements

let dayNumber = 3;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");

}