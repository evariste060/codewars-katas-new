function sortArray(array) {
  let odds = array.filter((e,i)=>e%2!==0).sort((a,b)=>a-b);//1 3 5
  let evens = array.filter(e=>e%2===0).sort((a,b)=>b-a);//8 4 2
  console.log(odds)
  return array.map(e=>e%2!==0 ? odds.shift():evens.shift())
  
}
console.log(sortArray([5,2,1,3,4,8]));