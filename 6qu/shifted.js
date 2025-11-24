//https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript
function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1;

  const double = first + first; //double first string
  const leftIndex = double.indexOf(second); //find the index of the second string in doubled string

  if (leftIndex === -1) return -1;

  // convert left-rotation index to right-rotation count
  return leftIndex === 0 ? 0 : first.length - leftIndex;
}
console.log(shiftedDiff('coffee','eecoff')) //2