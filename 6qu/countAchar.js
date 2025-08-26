/*function count(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(count('aba'));*/
function count(str){
  let result = {};
  for (let char of str){
    result[char] = (result[char]||0)+1
  }
  console.log(result);
}
count('aba');