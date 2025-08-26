function countSheeps(sheep) {
  let result = sheep.reduce((total,n)=>{
    return (n===true)?total+1:total;
  },0);
  return result;
}
console.log(countSheeps([true,false,true,false]));