let text = "Hello world, welcome to the universe.";
let look = prompt(`What do you want to check if includes in the frase?
"Hello world, welcome to the universe."`)



let start = Number(prompt('start looking at position:'))

if (start<0){
    start = text.length+start
}

let flag = 'nok'

    for (i=start; i<text.length; i++){
        let j = 0
    
        while (text[i] == look[j] && j<look.length){
            j++
            i++
        } 
 
        if (j==look.length){
                // console.log('position ' + (i-j))
                flag = 'ok' 
                break
        }
    }
    if (flag == 'nok'){
        console.log('false');
    }

console.log('true')