let arr = ['     aa Aa', 'BE', '   cc cffFF Ffff     ', 'ddedd   ', 'ee eEe', 'f0f']

//print the par strings position
//arr[i][j] ==> procura na localizacao i do array . pasando por cada letra do string usando j

// for (i=0; i<arr.length; i++){
//     // console.log(arr[i].length)
//     if(arr[i].length%2 == 0){
//         console.log(i);
//     }
// }

// print pair or odd location
// let pair = prompt('What do you want? pair or odd?')

// for (i=0; i<arr.length; i++){
//     // console.log(arr[i].length)
//     if (pair == 'pair'){
//         if(arr[i].length%2 == 0){
//             console.log(i);
//         }
//     }
//     else{
//         if(arr[i].length%2 == 1){
//             console.log(i);
//         }
//     }
// }

// looking for the 'e' letter in each string. return string location
for (i=0; i<arr.length; i++){
    if(arr[i].search('e') !== -1){
        console.log(i);
    }
}

// looking for string with 3 to 7 letters
// for (i=0; i<arr.length; i++){
//     if (arr[i].length > 3 && arr[i].length<7){
//         console.log(i)
//     }
// }

//toLowerCase
// for (i=0; i<arr.length; i++){
//     arr[i]= arr[i].toLowerCase()
// }
// console.log(arr);

//look for 2 words string. print the first. trim+split

let newArr = []
// for (i in arr){
//     arr[i] = arr[i].trim()
//     if (arr[i].search(" ") !==-1){
//         newArr = arr[i].split(' ')
//         console.log(newArr[0]);
//     }
// }

// //print the last
// let newArr02 = []
// for (i in arr){
//     arr[i] = arr[i].trim()
//     if (arr[i].search(" ") !==-1){
//         newArr02 = arr[i].split(' ')
//         console.log(newArr02[newArr02.length-1]);
//     }
// }

// console.log(arr);

// for (i in arr){
//     newArr = arr[i].split(' ')
//     console.log(newArr[0]);
// }