function sumAll(numbers){
    let result = (numbers.length === 0)?0:numbers.reduce((n,e)=>n+e,0);
    return result;
}
   
console.log(sumAll([1,2,3,4]));