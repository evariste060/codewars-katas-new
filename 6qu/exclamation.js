function balance(left, right) {
  let leftTotal = [...left].
  reduce((sum,element)=> (element === '!')? sum +2:sum+3,0 );
  let rigthTotal = [...right].
  reduce((sum,element)=> (element==='!')?sum+2:sum+3,0);
  return (leftTotal>rigthTotal)?'Left':(leftTotal<rigthTotal)?'Right':'Balance'
}
console.log(balance('???','!!!'));