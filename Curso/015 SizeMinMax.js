// First Question - random number between min and max

// function sizeMinMax(min, max) {
//     let result = Math.floor(Math.random()*(max-min)+min);
//     return result;
// }

// let min = Number(prompt('min?'));
// let max = Number(prompt('max?'));

// alert (sizeMinMax(min, max));

// Second Question - Array with random number between min and max acording with array's SIZE

let arr = [];

function sizeMinMax(size, min, max) {
    for (i=0; i<size; i++){
        let result = Math.floor(Math.random()*(max-min)+min);
        arr[i] = result;
    }
    return arr;
}
let size = Number(prompt('size?'));
let min = Number(prompt('min?'));
let max = Number(prompt('max?'));

console.log(sizeMinMax(size, min, max));