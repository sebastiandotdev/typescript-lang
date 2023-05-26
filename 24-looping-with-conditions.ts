export {};

function onlyTheAces(arr: string[]): string[] {
    var arrayOfAces: string[];
    arrayOfAces = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Ace") {
        arrayOfAces.push(arr[i]);
    }
} 
    return arrayOfAces;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
