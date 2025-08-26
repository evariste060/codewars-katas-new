function reverseVowels(str){
    let vowels = 'aeuioAIUOE';
    let characters = str.split('');
    let vowelsIndex = [];
    characters.map((e,i)=>{
        if(vowels.includes(e)) vowelsIndex.push([e,i])
    })
    let reversedVowels = vowelsIndex.map((e,i)=> e[0]).reverse();
    vowelsIndex.map((e,i)=>{
        characters[e[1]] = reversedVowels[i];
    })
console.log(characters.join(''));
}
reverseVowels('evariste');