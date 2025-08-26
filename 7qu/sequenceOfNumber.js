function explode(s) {
  let answer = s.split("").map(function (n){
    let result = "";
    for (let i=0;i<n;i++){
      result += n;
    }
    return result;
  })
  return answer.join("");
}
console.log(explode("12342000"))