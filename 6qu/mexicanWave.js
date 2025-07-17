function wave(str){
  let characters = str.split('');
  let result = [];
  for(let i=0;i<str.length;i++){
    if (characters[i] === ' ') continue;
    characters[i] = characters[i].toUpperCase();
    result.push(characters.join(''));
    characters[i] = characters[i].toLowerCase();
  }
  return result;
}
console.log(wave('two words'));