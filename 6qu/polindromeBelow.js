Number.prototype.palindromeBelow = function(base){
  const palindromes = [];
  for(let i=1;i<this;i++){
      let digits = i.toString(base);
      let reversed = [...digits].reverse().join("")
if(digits === reversed) palindromes.push(i)
  }
  return palindromes;
}
console.log((15).palindromeBelow(10))