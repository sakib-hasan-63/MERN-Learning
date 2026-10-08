
## Async / Await (Modern Way to Handle Promises)

`async` and `await` are syntactic sugar built on top of Promises. They make asynchronous code look and behave more like synchronous code, making it much easier to read and maintain.

* **`async`:** Turns a function into one that always returns a Promise.
* **`await`:** Pauses the execution of the async function until the Promise is settled (resolved or rejected).

### Syntax & Example

```javascript
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ id: 1, name: "Sakib", role: "MERN Developer" });
      } else {
        reject("Failed to fetch data!");
      }
    }, 2000);
  });
};

async function getUser() {
  try {
    console.log("Loading data...");
    
    // Waits here until the promise resolves
    const data = await fetchUserData();
    
    console.log("User Data Received:", data);
  } catch (error) {
    // Handles any rejection or error
    console.log("Error caught:", error);
  } finally {
    console.log("Process finished!");
  }
}

getUser();