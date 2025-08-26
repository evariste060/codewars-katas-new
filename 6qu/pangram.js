function isPangram(string){
  let obj= {}
  for(let char of string.toLowerCase()){
    if(char >='a' && char <= 'z' )  obj[char]= (obj[char]||0)+1;
  }
  console.log(Object.keys(obj).length)
  return Object.keys(obj).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."))