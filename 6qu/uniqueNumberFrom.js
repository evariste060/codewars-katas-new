function findUnique(arr){
  let odds = arr.filter(e=>e%2===0);
  let even = arr.filter(e=>e%2!==0)
  let positive = arr.filter(e=>e>=0);
  let negative = arr.filter(e=>e<0)
  console.log(negative)
  // arr = [-1,-2,-4,5]
  let integer = arr.filter(e=>e%1!==0)
  if(odds.length>1) {
      return arr.filter(e=>!(odds.includes(e)))[0]
  }
   if(negative){
      //return arr.filter(e=>!(negative.includes(e)))[0]
      return arr.filter(e=>!(negative.includes(e)))[0]
  }
  if(even.length>1){
      return arr.filter(e=>!(even.includes(e)))[0]
  }
  if(positive.length>1){
      return arr.filter(e=>!(positive.includes(e)))[0]
  }
  if(integer.length>1){
      return arr.filter(e=>!(integer.includes(e)))[0]
  }
  
}
//console.log(findUnique([2,3,4,6,8]))
console.log(findUnique([-1,-2,-3,4]))
function findUnique(arr) {
  // Integer/decimal
  let integers = arr.filter(e => Number.isInteger(e));
  let decimals = arr.filter(e => !Number.isInteger(e));
  if (integers.length === 1) return integers[0];
  if (decimals.length === 1) return decimals[0];

  // Sign
  let positives = arr.filter(e => e >= 0);
  let negatives = arr.filter(e => e < 0);
  if (positives.length === 1) return positives[0];
  if (negatives.length === 1) return negatives[0];

  // Parity
  let evens = arr.filter(e => e % 2 === 0);
  let odds = arr.filter(e => e % 2 !== 0);
  if (evens.length === 1) return evens[0];
  if (odds.length === 1) return odds[0];

  return null; // No unique found
}

// Examples:
console.log(findUnique([1, 2, 3, 4, 5.5])); // 5.5 (decimal)
console.log(findUnique([1, 2, 3, 4, -5]));  // -5 (negative)
console.log(findUnique([1, 2, 3, 4, 6]));   // 1 (odd)
console.log(findUnique([1.1, 2.2, 3.3, 4])); // 4 (integer)