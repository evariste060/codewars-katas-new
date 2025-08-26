function reverseHigh(str){
    let arr = str.split(' ');
    let longest=arr[0];
    for(let i=1;i<=arr.length-1;i++){
        if(arr[i].length>longest.length) longest = arr[i]
    }
    return longest.split('').reverse().join('')
}
console.log(reverseHigh("I love JavaScript programming"));
function reverseHigh(str) {
  return str
    .split(' ')
    .reduce((a, b) => (b.length > a.length ? b : a))
    .split('')
    .reverse()
    .join('');
}
console.log(reverseHigh("I love JavaScript programming"));