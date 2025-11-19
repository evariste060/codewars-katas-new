//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
const scramble = (str1, str2)=> {
  const freq = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return str2.split('').every(char => {
    if (!freq[char]) return false;
    freq[char]--;
    return true;
  });
}
console.log(scramble('rkqodlw', 'world')) // true