export {};

// original
function greatest(x: number, y: number) {
    return Math.max(x, y)
}

// anonymous arrow function
(x: number, y: number) => Math.max(x, y);

// traditional arrow function
let greatestNum = (x: number, y: number) => Math.max(x, y);

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5

console.log(greatestNum(1, 2)); // Expected output: 2
console.log(greatestNum(5, 2)); // Expected output: 5
