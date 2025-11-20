function alphabetPosition(text) {
const alphabet = text.split('').filter(a=>a.toLowerCase() !=a.toUpperCase())
return alphabet.map((e,i)=> e.toLowerCase().charCodeAt()-96).join(' ')
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))