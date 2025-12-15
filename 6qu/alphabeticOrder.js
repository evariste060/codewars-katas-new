function sort(sentence){
    const word = sentence.split(' ').map(e=>{
        return [...e].filter(char=>!(char.toLowerCase()===char.toUpperCase())).join('')
    }).flat()
    const lowerCase = word.filter(word=>word[0]===word[0].toLowerCase()).sort()
    const upperCase = word.filter(word=>word[0]===word[0].toUpperCase()).sort().reverse()
    return [...lowerCase,...upperCase].join(' ')
}
console.log(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"))