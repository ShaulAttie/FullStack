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

let newFruits = []

for (i=0; i< arr.length; i++){
    newFruits[i] = arr[i]
}
// console.log('newFruits array01 ' + newFruits);
debugger
for (j=0; j< fruits.length+1; j++){
    newFruits[i++] = fruits[j]
}
// console.log('newFruits array ' + newFruits);

fruits = []

for (i=0; i< newFruits.length-1; i++){
    fruits[i] = newFruits[i]
}

// console.log('fruits array after adding new array ' + fruits);
console.log(fruits);
