let arr = [2,6,3,8,-5,0,-1,6,5];

function arrSum(sum,num){
    return sum + num;               //will accumulate at sum array values from i=0 to i=n starting with value 0 
} 

console.log(arr);
console.log("Array's Sum: "+ arr.reduce(arrSum));    // default initial value 0
