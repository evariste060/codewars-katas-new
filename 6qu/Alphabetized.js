//https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript
const alphabetized = (s) => {
  const letters = [...s].filter(e=>e.toLowerCase()!=e.toUpperCase()) //case Insensitive sorting locale compare 
  return letters.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())).join('')
}
console.log(alphabetized("The Holy Bible")) // "BbeehHilloTy"