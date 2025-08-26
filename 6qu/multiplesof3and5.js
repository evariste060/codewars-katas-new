function solution(number){
  if(number<0) return 0;
  let multiples = [];
  for(let i=0;i<number;i++){
    if(i%3===0||i%5===0) multiples.push(i);
  }
  console.log(multiples);
  return multiples.reduce((sum,element)=>sum+element,0);
  
}
console.log(solution(10))