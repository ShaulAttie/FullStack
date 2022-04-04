const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let lookFor = prompt(`What fruit do you want?
// "Banana", "Orange", "Apple", "Mango"`)
let lookFor = 'Orange'
let start = Number(prompt('start looking at position:'))

if (start<0){
    start = fruits.length+start
}

for (i = start; i<fruits.length ; i++){
//for (i in fruits){

    if (fruits[i] == lookFor){
        console.log(fruits[i])
        console.log('at position ' + i)
        break;
    }
}

if (fruits[i] != lookFor){

        console.log('-1');
    }

console.log(fruits)