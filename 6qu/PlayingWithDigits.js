function digPow(n, p){
  let result = [...String(n)].reduce((sum,e)=>{
    sum+=Math.pow(e,p)
    p++ ;
    return sum
  },0)
  return Number.isInteger(result/n)?result/n:-1;
}
/*the katas of checking if ()