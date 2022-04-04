// Third question - 2 numbers sum
function sum(a,b){
    result = a+b;
    return result;
}

// Forth question - using function sum(a,b)
let result = 0;
let arr = [2,6,3,8,-5,0,-1,6,5];

function sumArr(arr){
    for (i=0 ; i<arr.length; i++){
                result += sum(0,arr[i]);
            }
            return result;
}
console.log(arr);
console.log("Array's Sum: "+ sumArr(arr));


// Third question - 2 numbers sum

// function sum(a,b){
//     let result = a+b;
//     return result;
// }
// alert (sum(1,4));

// Forth question - arrays sum

// let arr = [2,6,3,8,-5,0,-1];
// let result = 0;

// function sumArr(arr){
//     for (i in arr){
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sumArr(arr));

// Forth Questiion - with 2 functions

// let arr = [];
// let result01 = 0;
// let result02 = 0;

// let size = Number(prompt('size?'));
// let min = Number(prompt('min?'));
// let max = Number(prompt('max?'));

// function sizeMinMax(size, min, max) {
//     for (i=0; i<size; i++){
//         result01 = Math.floor(Math.random()*(max-min)+min);
//         arr[i] = result01;
//     }
//     return arr;
// }
// // debugger
// // result = 0;

// function sumArr(arr){
//     for (i in arr){
//         result02 += arr[i];
//     }
//     return result02;
// }

// console.log(sizeMinMax(size, min, max)); 
// console.log(sumArr(arr));
