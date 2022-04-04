let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let start = 3
// let delCount = 1
let start = Number(prompt('start point to cut'))
let delCount = Number(prompt('how many elements to delete'))

// let arr = [a, b];
// let a = '$$', b = '##';

let arr = []
let i = 0

let newArr = prompt(`Enter new elements to new array.
To stop adding just press enter without filling a number.`)

while (newArr != '') {
    //    newArr = prompt('enter new elem to new array')
    arr[i++] = newArr
    newArr = prompt('enter new elem to new array')
}


let n1 = [];
for (i = 0; i < start; i++) {
    n1[i] = n[i]
}
console.log(n1);

let cut = (start + delCount)
let n2 = [];
for (i = 0; i < n.length - cut; i++) {
    n2[i] = n[i + cut]
}
console.log(n2);

// let n3 = n1.concat(arr,n2)
// console.log(n3);

let n4 = []
//for (i=0; i<n1.length; i++){
for (i in n1) {
    // o i comeca em 0 ate o ultimo elem de n1. pode ser tb em string.
    // index -> in value -> of
    n4[i] = n1[i]
}

for (i in arr) {
//for (i = 0; i < arr.length; i++) {
    n4[n4.length++] = arr[i]
}

for (i in n2) {
//for (i = 0; i < n2.length; i++) {
    n4[n4.length++] = n2[i]
}
console.log(n4);
