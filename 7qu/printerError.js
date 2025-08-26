function printerError(s) {
  let answer = s.split('').reduce((error,element)=>{
    return (element.toLowerCase()>"m")?error+1:error; 
  },0);
    return `${answer}/${s.length}`;
}
console.log(printerError("aaaaabbbccc"));