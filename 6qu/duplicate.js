const duplicateCount = (text) => {
 const result =  [...(text).toLowerCase()].reduce((acc,curr)=>{
   acc[curr] = (acc[curr]||0)+1;
   return acc
 },{})
 return  Object.entries(result).filter(e=>e[1]>1).length
}
console.log(duplicateCount("abce"))