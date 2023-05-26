export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(strArray: string[]): string[] {
return strArray.map(name => 
  tidyUpString(name).charAt(0).toUpperCase() + tidyUpString(name).substring(1));
}

// function capitalise(strArray: string[]): string[] {
//   var tidiedUpAndCapitalised: string[];
//   tidiedUpAndCapitalised = [];
//     strArray.map(name => {
//     let nameTidiedUp = tidyUpString(name);
//     let nameCapitalized = nameTidiedUp.charAt(0).toUpperCase() + nameTidiedUp.substring(1);
//     tidiedUpAndCapitalised.push(nameCapitalized);
//   })
//   return tidiedUpAndCapitalised;
//   }

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]


