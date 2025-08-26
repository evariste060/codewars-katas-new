function divisibleCount(x, y, k) {
  let counter=0;
  for(let i=x;i<=y;i++){
    if(i%k===0) counter++;
  }
  return counter;
}
console.log(divisibleCount(6,120,7));