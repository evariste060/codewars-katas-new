function reverseWords(str) {
  let result =  str.split(" ").map((n)=> n.split('').reverse().join(""));
  return result.join(" ")
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));