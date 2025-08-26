/*function longestConsec(strarr, k) {
  let longest =strarr.slice(0,k+1).join("");
  for(let i=0;i<=strarr.length-k;i+=k){
    let currentLength = strarr.slice(i,k+i).join('');
    if(currentLength.length>longest.length) longest = currentLength;
  }
  return longest;
}
console.log(longestConsec(['hello','feel','free','ask','world',],2))*/
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return "";

  let longest = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let current = strarr.slice(i, i + k).join('');
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
console.log(longestConsec(['hel','Bro','free','ask','world',],2))
