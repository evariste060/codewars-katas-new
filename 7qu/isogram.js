function isIsogram(str){
  let characters = str.split("");
  let newArray = [];
  for (let a of characters){
    newArray.push(a)
    if (newArray.includes(a)){
        continue;
    }
  }
  return characters.join("") === newArray.join("");
  
}
console.log(isIsogram("aba"))