function findAll(array, n) {
   let result = [];
  for (let i in array){
    if(array[i]===n){
      result.push(Number(i));
    }
  }
  return result;
}
console.log(findAll([1,2,3,4,4],4));