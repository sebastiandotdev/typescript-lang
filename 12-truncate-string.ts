export {};

function truncateString(s:string, n:number) {
return s.substring(0, n);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
