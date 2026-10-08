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

// Async / Await function
async function getUser() {
  try {
    console.log("Loading data...");
    

    const data = await fetchUserData();
    
    console.log("User Data Received:", data);
  } catch (error) {
 
    console.log("Error caught:", error);
  } finally {
    console.log("Process finished!");
  }
}

getUser();