function numtozeroSum(num) {
    // if (num < 0){
    //     return -1
    // }
    if (num == 0){
        return 0
    }
    else{
        return num + numtozeroSum(num--)
        // return num + (num>0 ? nuntozeroSum(num--) : nuntozeroSum(num++) )
    }
}

console.log(numtozeroSum(-5));              // expected -1
console.log(numtozeroSum(0));               // expected 0
console.log(numtozeroSum(4));               // expected 10
console.log(numtozeroSum(10));              // expected 55