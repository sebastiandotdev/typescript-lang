export {};

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function sum(numArray: number[]): number {
    var sum: number = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

function multiply(numArray: number[]): number {
    var multiplication = 1;
    for (var i = 0; i < numArray.length; i++) {
        multiplication *= numArray[i];
    }
    return multiplication;
}

function power(a:number, b: number): number {
    var result: number = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
