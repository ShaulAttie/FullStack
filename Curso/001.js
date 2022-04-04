let n = [0,1,2,3,4,5,6,7,8,9]

n.splice(0,0,'A')
n.splice(n.length,0,'Z')

let n2 = [7,8,9]
let n3 = n.concat(n2)
console.log(n3);

let look = Number(prompt('enter a number to look for'));
console.log('your number is at the position ' + n3.indexOf(look)); 

let num = prompt('enter a number to add');
let where = prompt('At each position do you want to add it')
n3.splice(where,0,num)
console.log(n3);