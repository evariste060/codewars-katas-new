function sortStringsByVowels(strings){
  const longestVowelSubstring = (word)=> {
  let vowels = "aeiouAEIOU"; 
  let max = 0;
  let current = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }
  return max;
}
  return strings.sort((a,b)=>longestVowelSubstring(b)-longestVowelSubstring(a))
  
}