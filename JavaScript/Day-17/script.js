const user = {
    name: "Sakib Hasan",

    address: {
        city: "Lucknow",
        country: "India"
    },

    social: {
        github: "sakib-hasan-63"
    }
};

// Normal property
console.log("Name:", user.name);

// Optional chaining
console.log("City:", user.address?.city);

// Property does not exist
console.log("Pincode:", user.address?.pincode);

// Nested optional chaining
console.log("Country:", user.address?.country);

// Missing object
console.log("Phone:", user.contact?.phone);

// Optional chaining with function
user.login?.();

// Optional chaining + default value
const phone = user.contact?.phone ?? "Phone not available";

console.log("Phone:", phone);