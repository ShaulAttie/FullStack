// let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
// let txt2 = "PIG17, bear29, BiRd8" ;
// let txt3 = "SNAKE39, donkey14";
// // console.log(txt1);
// // console.log(txt2);
// // console.log(txt3);

// //turning all the string to a single array
// txt = txt1.concat(',',txt2,',',txt3)
// // let animalList = txt.toLowerCase().split(',')
// let animalList = txt.split(',')
// //trim each string
// for (i in animalList){
//     animalList[i] = animalList[i].trim()
// }
// console.log(animalList.sort());


let txt = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let animalList = txt.split(',')
for (i in animalList){
    animalList[i] = animalList[i].trim()
}
console.log("animalList " + animalList.sort());

let newAnimalList = []
let j=0
for (i=0 ; i<animalList.length ; i++){
    newAnimalList[i][j] = 
}

// let newAnList = animalList.map(myFun)

// function myFun(str){
//     return [str.match(/\D+/),str.match(/\d+/)]
// }

// function myFun(str){
// return {a: str.match(/\D+/), b: str.match(/\d+/)}
// }
// console.log("newAnList" + newAnList);

// console.log('Object.entries(newAnList)' + Object.entries(newAnList));
// Expected output: ["name", "age", "occupation", "level"]


// console.log(Object.entries(newAnList));
// console.log(newAnList[0])
// for ( [a, b] of Object.entries(newAnList)){
// console.log('${a} ${b}')
// }
// console.log(newAnList[0].a);
// console.log(newAnList[0].b);











// let newp = 'true';              // flag for the while

// while (newp === 'true') {

// let toDo = Number(prompt(`Wellcome to our Zoo!
// What do you want to do?
// [1] Search a animal by code
// [2] Search animal by name
// [3] To add a new animal
// [4] To delete a animal from the system
// [5] Exit`))

// let flag = 'nok';
// // debugger
// switch (toDo) {
//     case 1:     //Search a animal by code
//         let codeSearch = prompt('What is the animal code?');
//         for (i=0; i<animalList.length; i++){
//             if(animalList[i].search(codeSearch) !== -1){
//                 // console.log("Animal Code: " + animalList[i].replace(/\D/g,'') + "\n" + "Animal Name: " + animalList[i].replace(/\d/g,'') );
//                 console.log("Animal Code: " + animalList[i].match(/\d+/) + "\n" + "Animal Name: " + animalList[i].match(/\D+/) );
//                 flag = 'ok'
//                 break
//             }
//         }
//         if (flag == 'nok'){
//             console.log('Incorrect animal code');
//         }
//         break;

//     case 2:     //Search animal by name
//         let animalSearch = prompt('What is the animal name?');
//         for (i=0; i<animalList.length; i++){
//             if(animalList[i].toLowerCase().search(animalSearch.toLowerCase()) != -1){   // comparing animalList and animal search both on lower case
//                 console.log("Animal Code: " + animalList[i].match(/\d+/) + "\n" + "Animal Name: " + animalList[i].match(/\D+/) );
//                 flag = 'ok'
//             }
//         }
//         if (flag === 'nok'){
//             console.log('Incorrect animal name');
//         }
//         break;

//     case 3:     //To add a new animal
//         let newCode = prompt('What is the new animal code?');
//         let newAnimal = prompt('What is the new animal name?');
//         for (i=0; i<animalList.length; i++){
//             if(animalList[i].search(newCode) !== -1){
//                 console.log('This code exist.\nPlease enter a new code');
//                 flag = 'ok'
//                 break
//             }               
//         }
//         if (flag === 'nok'){
//             animalList.push(newAnimal.concat(newCode));
//             console.log(animalList.sort());
//         }
//         break;

//     case 4:     //To delete a animal from the system
//         let delCode = prompt('What is the animal code to delete?');
//         for (i=0; i<animalList.length; i++){
//             if(animalList[i].search(delCode) !== -1){
//                 animalList.splice(i,1)
//                 console.log(animalList);
//                 flag = 'ok'
//                 break
//             }               
//         }
//         if (flag === 'nok'){
//             console.log("This code doesn't exist");
//         }
//         break;

//     case 5:
//         console.log('Good Bye');
//         newp = 'false';
//         break;
//     }
//   }