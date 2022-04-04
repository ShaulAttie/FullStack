let text = "Hello world, welcome to the univewelrse.";
// let look = 'wel'
let look = prompt(`Do you want to look for position of?
"Hello world, welcome to the universe."`)


// if( look.length == 1 ){
//     for (i in text){
//         if (text[i] == look){
//             console.log(text[i])
//             console.log('in position '+i)
//             break                       //without break show all the positions
//         }
//     }
// }

// if (look.length == 2){
//     debugger
//     for (i=0; i<text.length; i++){
//         debugger
//         if (text[i] == look[0] && text[i+1] == look[1]){
//             console.log(text[i])
//             console.log('in position '+i)
//             debugger
//             break
//         }
//     }
// }

// if (look.length == 3){
//     debugger
//     for (i=0; i<text.length; i++){
//         debugger
//         if (text[i] == look[0] && text[i+1] == look[1] && text[i+2] == look[2]){
//             console.log(text[i])
//             console.log('in position '+i)
//             debugger
//             break
//         }
//     }
//}


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
                console.log('position ' + (i-j))
                flag = 'ok' 
                break
        }
    }
    if (flag == 'nok'){
        console.log('-1');
    }

console.log(text)