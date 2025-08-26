function encode(s) {
  let  encodedString =[];
  arr= s.split('');
  for(let i=0;i<Math.floor(s.length/2);i++){
    encodedString.push( arr[i],arr[s.length-(i+1)]);
  }
  if (s.length%2!==0) encodedString.push(arr[Math.floor(s.length-1)/2]);
  return encodedString.join('');
}
console.log(encode('codewars'));//csordaew white
function decode(str) {
  const result = new Array(str.length);
  let left = 0, right = str.length - 1;
  let i = 0;

  while (left < right) {
    result[left++] = str[i++];
    result[right--] = str[i++];
  }

  if (left === right) {
    result[left] = str[i];
  }

  return result.join('');
}

console.log(decode("csordaew"))