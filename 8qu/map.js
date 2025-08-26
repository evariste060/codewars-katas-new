/*function that return squares of element in array*/
function squareNumber(numbers){
    return numbers.map((x)=>Math.sqrt(x));
}
console.log(squareNumber([1,4,9]));