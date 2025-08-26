// function generatePairs(n) {
//  const pair=[];
//   let start=0;
//   for(let i=0;i<=n;i++){
//     for(let j=0;j<=i;j++) pair.push([i,j])
//   }
//   return pair
// }
// console.log(generatePairs(2))
function generatePairs(n) {
  const pair = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      pair.push([i, j]);
    }
  }
  return pair;
}
console.log(generatePairs(2));