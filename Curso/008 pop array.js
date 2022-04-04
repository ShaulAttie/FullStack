let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('fruits array ' + fruits);
let newFruits = []

for (i=0; i< fruits.length-1; i++){
    newFruits[i] = fruits[i]
}
fruits = []
console.log('newFruits array ' + newFruits);

for (i=0; i< newFruits.length; i++){
    fruits[i] = newFruits[i]
}

console.log('fruits array after pop ' + fruits);
console.log(newFruits);