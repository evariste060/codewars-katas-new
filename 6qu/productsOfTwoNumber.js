function squareProduct(n) {
    let result = [];
  for(let i=1;i<=Math.floor(Math.sqrt(n));i++){
    for(let j=i;j<=Math.floor(Math.sqrt(n));j++){
      if(i**2*j**2===n){
        
        result.push([i,j]);
      } 
    }
  }
  return result;
}
console.log(squareProduct(1))