let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

//array.splice(index, howmany to delete, item1, ....., itemX)

let newFruits = []
// let start= 1
// let del = 2

let start = Number(prompt("The position to add/remove items."))
let del = Number(prompt("Number of items to be removed."))

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

for (i = 0; i < start; i++){
    newFruits[i]=fruits[i]
}

for (i = 0; i < arr.length; i++){
    newFruits[start+i]=arr[i]
    // debugger
}

for (i=0; i<fruits.length-(start+del); i++){
    newFruits[start+arr.length+i]=fruits[start+del+i]
}

console.log(fruits);
console.log(newFruits);
