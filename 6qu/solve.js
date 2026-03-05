function solve(arr){
  let obj = {}
  arr.forEach(item => obj[item] = (obj[item] + 1 || 1 ))
  return arr.sort((a,b) => obj[b] === obj[a] ?  a - b : obj[b] - obj[a])
}