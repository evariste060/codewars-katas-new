function encode(string) {
  const vowels = ['a','e','i','o','u']
  return [...string]
    .map((e,i)=>vowels.includes(e)?vowels.indexOf(e)+1:e)
    .join('')
}

function decode(string) {
  const vowels = ['a','e','i','o','u'];
  
  return [...string]
    .map(e => vowels[Number(e) - 1] ?? e)
    .join('');
}