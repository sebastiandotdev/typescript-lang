export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(param: string | null): boolean {
    // if (param === null || param.trim() === "") {
    // return true;
    // } 
    return param === null || !param.trim();     // ! - not operator   !! - not not operator, truthy/falsy 
    // The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
