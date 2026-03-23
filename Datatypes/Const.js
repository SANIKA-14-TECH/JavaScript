const fruits = ["apple", "banana", "mango"];

console.log("Initial array:", fruits);

// Adding another fruit
fruits.push("orange");
console.log("After adding a fruit:", fruits);

// Trying to reassign the array
try {
    fruits = ["grape", "pineapple"];
} catch (error) {
    console.log("Error on reassignment:", error.message);
}