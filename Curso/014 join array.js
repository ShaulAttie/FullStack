let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();

let str = ''
// let add = ' and '
let add = prompt("Any separator can be specified")
if (add == ''){
    add = ','
}

for ( i in fruits ){
    str += fruits[i++]
    if (i<fruits.length){
        str += add
    }
}

console.log(str);
