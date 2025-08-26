function generatePairs(n) {
  let result = [];
  for(let i=0;i<=n;i++){
    let insideArry=[];
    for(let j=0;j<=i;j++){
      insideArry = [i,j];
    }
    result.push(insideArry)
  }  
  return result;
}
console.log(generatePairs(3))