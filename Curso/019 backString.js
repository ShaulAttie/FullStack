let text = "Fun to learn programming";

let i = text.length-1;
let newText= '';

function backString(text) {
    if (i>=0){
        newText += text[i--]
        backString(text)       
    }
    return newText
}

console.log(backString(text));
console.log(text);




// internet solution

// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
// //   reverseString(text);

// console.log(reverseString(text));
// console.log(text);

// Conditional Ternary Operator
// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   reverseString("hello");