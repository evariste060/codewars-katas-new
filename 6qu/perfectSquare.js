//https://www.codewars.com/kata/5697a0d35f754d1592000018/train/javascript
const isSquare = (arr) =>(arr.length)
 ?arr.flat(Infinity).every(e=>Number.isInteger(Math.sqrt(e)))//return true when the number is perfect square on not
 :undefined;
console.log(isSquare([1,3,4,5,5,6,7]))