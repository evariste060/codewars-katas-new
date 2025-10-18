/*this function take 2 input one is word other is array it will return the element
 in array that contain the same extact letters as that word before */
const grabscrab = (anagram, dictionary) => {
  const sortedAnagram = anagram.split('').sort().join('');
  return dictionary.filter(e=>e.split('').sort().join('')=== sortedAnagram)
} 