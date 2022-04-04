let names = ["nadav", "maya", "yonatan", "avi", "yossi", "bat el"]

//04 looking for string with 3 to 7 letters
// for (i=0; i<names.length; i++){
//     if (names[i].length > 3 && names[i].length<7){
//         console.log(names[i])
//     }
// }

//05 toUpperCase
// for (i=0; i<names.length; i++){
//     names[i]= names[i].toUpperCase()
// }
// console.log(names);

//06 look for 2 words string. print the first.

// let newArr = []
// for (i in names){
//     if (names[i].search(" ") !==-1){
//         newArr = names[i].split(' ')
//         console.log(newArr[0]);
//     }
// }

// //06 print the last
// let newArr02 = []
// for (i in names){
//     if (names[i].search(" ") !==-1){
//         newArr02 = names[i].split(' ')
//         console.log(newArr02[newArr02.length-1]);
//     }
// }

//07 print the names with * between 
// let txt = ''
// debugger
// for (i=0; i<names.length; i++){
//     txt += names[i] + "*".repeat(i)
//     // newArr = names[i].split(' ')
// }
// console.log(txt);

// //08 א print number till 2 before the end
// let number = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10];
// console.log(number.slice(0,-2))

// //08 ב print the first 3 number
// console.log(number.slice(0,3))

//print array with only names
// let str = "ben##levi###kobi#yossi#avi####dan";
// let newArr = str.split('#')
// let newArr02 = []
// let j = 0
// console.log(newArr);
// for (i in newArr){
//     if (newArr[i] !== ''){
//         newArr02[j++] = newArr[i] 
//     }
// }
// console.log(newArr02);

//09 print only letters in upper case
// let txt = '';
// debugger
// for (i of str){
//     if (i !== "#"){
//         txt += i;
//     }
// }
// console.log(txt.toUpperCase());
