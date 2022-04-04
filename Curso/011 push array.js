let fruits = ["Banana", "Orange", "Apple", "Mango"];

let arr = []
let i = 0

let newArr = prompt(`Enter new Fruits to array.
To stop adding just press enter without filling a number.`)

while (newArr != '') {
    arr[i++] = newArr
    newArr = prompt('enter new elem to new array')
}
// console.log(arr);
// arr = [01,02,03]

let newFruits = []

for (i = 0; i < fruits.length; i++){
    newFruits[i]=fruits[i]
    debugger
}

for (i = 0; i < arr.length; i++){
    newFruits[fruits.length+i]=arr[i]
    debugger
}

fruits = newFruits
console.log(fruits);