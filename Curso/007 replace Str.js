let text = "Mr Blue has a blue house and a blue car.";
// let look = 'blue'
let look = prompt(`What do you want to replace in the frase?
"Mr Blue has a blue house and a blue car."`)
// let newWord = 'red'
let newWord = prompt('what is the new word?')


let flag = 'nok'
const arr = []
let p = 0

    for (i=0; i<text.length; i++){
        let j = 0
    
        while (text[i] == look[j] && j<look.length){
            j++
            i++
        } 
 
        if (j==look.length){
                // console.log('position ' + (i-j))
                arr[p++] = (i-j)
                flag = 'ok' 
                //break
        }
    }

let newText = ''
    p = 0
    j = 0

for (let i =0 ; i<text.length; i++){
    // debugger
    if (text[i] = look[j] && i==arr[p]){
        newText += newWord
        i += look.length -1
        p++
    }
    else {
        newText += text[i]
    }
    
}

if (flag == 'nok'){
    console.log('This word is not in the frase.');
}

//console.log(arr)
console.log(text)
console.log(newText)