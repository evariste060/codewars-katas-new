var isSquare = function(n){
    if (n<0) return false;
    for(let i=0;i<=n;i++){
        let m = i*i;
        if (m === n){
            return true;
        }
    }
    return false;
}
console.log(isSquare(1))
/*function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}*/