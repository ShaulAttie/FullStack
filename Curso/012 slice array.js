let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//              0           1        2        3        4
//              -5          -4      -3        -2       -1         
// 0 = -fruits.length
// 1 = -fruits.length+1
// 2 = -fruits.length+2

let a= Number(prompt('where to start cutting the array?'))
let b= Number(prompt('where to end cutting the array?'))

if (a<0){
    a += fruits.length
}
if (b<0){
    b += fruits.length
}
// debugger
let newFruits = []
let j=0

for (i=a; i<b ; i++){
    newFruits[j++] = fruits[i]
}

console.log(fruits);
console.log(newFruits);