let arr = [2,8,1,[5,3,2],7,[9,14,2]]
// let j=0
let newArr = [0];

for (i in arr){
    if (arr[i].length == undefined){
        newArr[i] = arr[i]
    }

    let sum = 0

    if(arr[i].length>0){
        for (j=0; j<arr[i].length; j++){
        sum += arr[i][j]
        }
        newArr[i] = sum
    }
}
console.log(newArr);

function arrSum(sum01,num){
    return sum01 + num;               //will accumulate at sum array values from i=0 to i=n starting with value 0 
} 
console.log("Array's Sum: "+ newArr.reduce(arrSum));
