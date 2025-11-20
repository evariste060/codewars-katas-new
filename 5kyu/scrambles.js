//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
const scramble = (str1, str2)=> {
  const freq = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});//creating the object of the character and it's frequency in first string

  return str2.split('').every(char => {
    if (!freq[char]) return false; // if the  string 2 does not include the character return false
    freq[char]--; //decreament the value of the character we have found in the string 2 currently
    return true;
  });
}
console.log(scramble('rkqodlw', 'world')) // true