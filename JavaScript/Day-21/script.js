// Hoisting
sayHello();

function sayHello(){
    console.log("hello JS");
}

// Closure 
function createCounter() {
  let count = 0; // This variable is enclosed

  return function() {
    count++; // The inner function accesses 'count'
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Asynchoronous

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data Arrived!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback execute.");
});

// Async / Await

async function getUserInfo() {
  try {
    console.log("Loading...");
    // API call
    let response = await fetch('https://api.github.com/users/octocat');
    let data = await response.json();
    
    console.log("User Data:", data.login);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUserInfo();