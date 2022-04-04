let text = "       !       Hello World!  eu sou voce      !           ";
let result = ''

let i=0
while (i<text.length){
    if (text[i] !== " " ){
        result += text[i]
        break
    }
    i++
}
for (i++;i<text.length; i++){
    result += text[i]
}

let result02 =''

i=result.length-1
while (i>0){
    if (result[i] !== " " ){
        result02 += result[i]
        break
    }
    i--
}

for (i--; 0<=i; i--){
    result02 += result[i]
}

let result03 = ''
let j= 0

for (i=result02.length-1 ; 0<=i; i--){
    result03 += result02[i]
    j++
}

console.log('text' + text);
console.log('result ' + result);
console.log('result02 ' + result02);
console.log('result03 ' + result03);


// for (i in text){
//     // debugger
//     if (text[i] !== " " ){
//         result = result + text[i]
//     }

// }

// for (let i=0; i< text.length ;i++){
//     if (text[i] !== " " ){
//         result += text[i]
//     }
//     if (text[i] === " " && text[i+1] !== ' ' && text[i-1] !== ' ' ){
//         // debugger
//         result += ' '
//     }
// }

// let arr = []
// for (i= 0; i<text.length;i++){
//     arr[i]= text[i]
    
// }