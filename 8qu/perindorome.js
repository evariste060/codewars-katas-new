function isPalindrome(x) {
  let reversed = x.toLowerCase().split("").reverse().join("");
  return (reversed === x.toLowerCase())?true:false;
}
console.log(isPalindrome("Abba"));