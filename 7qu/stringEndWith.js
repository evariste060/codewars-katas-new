/*function solution(str, ending){
  return str.endsWith(ending);
}
console.log(solution("abc","bc"));*/
function solution(str,ending){
  return str.slice(-ending.length) === ending;
}
console.log(solution("abc","bc"));