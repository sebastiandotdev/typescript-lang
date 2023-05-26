export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */


function bubblesort(array: number[]): number[]{ 
    for (var i = 0; i < array.length; i++) {
        for (var k = 0; k < array.length-i; k++) {
            var temp: number;
            if (array[k] < array[k+1]) {
            temp = array[k];
            array[k] = array[k+1]
            array[k+1] = temp;
            }
        }
    }
return array;
}

function findMax(array: number[]): number {
const sortedArray = bubblesort(array);
    return sortedArray[0];
}

function findMin(array: number[]): number {
    const sortedArray = bubblesort(array);
        return sortedArray[array.length-1];
    }


const min = (array: number[]) => Math.min.apply(Math, array);

const max = (array: number[]) => Math.max.apply(Math, array);

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9

// console.log(bubblesort([1, 2, 3, 4, 5]));
// console.log(bubblesort([9, -3, 6])); 
// console.log(bubblesort([1, 2, 3, 4, 5])); 
// console.log(bubblesort([9, -3, 6]));

console.log(findMin([1, 2, 3, 4, 5])); // Expected output: 1
console.log(findMin([9, -3, 6])); // Expected output: -3
console.log(findMax([1, 2, 3, 4, 5])); // Expected output: 5
console.log(findMax([9, -3, 6])); // Expected output: 9
