const groupAnagrams = (words)=>{
  const map = new Map(); // will store anagram words
  for(let word of words){
    const sortedWord = [...word].sort().join('');
    if(!map.has(sortedWord)) map.set(sortedWord,[]);
    map.get(sortedWord).push(word);
  }
  return Array.from(map.values())
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))