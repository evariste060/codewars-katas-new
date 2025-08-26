function descendingOrder(n){
  let result;
  if (n >=0){
   result = n.toString().split("").sort().reverse().join("");
  }
  return Number(result);
}
console.log(descendingOrder(142659));