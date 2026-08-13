const cart = [
    { name: "Shirt", price: 500, inStock: true },
    { name: "Pants", price: 1200, inStock: false },
    { name: "Shoes", price: 2000, inStock: true },
    { name: "Socks", price: 100, inStock: true }
];

cart.forEach((shop) => {
    console.log(`Name is : ${shop.name} price is : ${shop.price} stock is : ${shop.inStock}`)
})


const ans1 = cart.filter(item => item.inStock);
console.log(ans1);
const ans2 = cart.map(item => item.price * 0.9);
console.log(ans2);
const ans3 = cart.reduce((total, item) => total + item.price, 0);
console.log(ans3);


// All in one code 

const cart2 = [
    { name: "Shirt", price: 500, inStock: true },
    { name: "Pants", price: 1200, inStock: false }, // Out of stock
    { name: "Shoes", price: 2000, inStock: true },
    { name: "Socks", price: 100, inStock: true }
];

// Goal: Apply a 10% discount on in-stock items and calculate the total bill.

const totalBill = cart2
    .filter(item => item.inStock)                 // 1. Filter out-of-stock items -> Returns array of matching objects
    .map(item => item.price * 0.9)                // 2. Calculate 10% discounted price -> Returns array of discounted numbers [450, 1800, 90]
    .reduce((total, price) => total + price, 0);  // 3. Sum all prices together -> Returns a single total number

console.log(totalBill); // Output: 2340

let totalBill2 = 0;

cart2.forEach(item => {
    // Check if the item is in stock
    if (item.inStock) {
        const discountedPrice = item.price * 0.9; // Apply 10% discount
        totalBill2 += discountedPrice;              // Add to accumulator variable
    }
});

console.log(totalBill2); // Output: 2340

