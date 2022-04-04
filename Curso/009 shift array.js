let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('fruits array ' + fruits);
let newFruits = []

for (i=0; i< fruits.length; i++){
    newFruits[i] = fruits[i+1]
}
fruits = []
console.log('newFruits array ' + newFruits);

for (i=0; i< newFruits.length-1; i++){
    fruits[i] = newFruits[i]
}

console.log('fruits array after pop ' + fruits);
console.log(fruits);
