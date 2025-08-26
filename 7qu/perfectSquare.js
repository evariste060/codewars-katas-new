function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq)%1===0){
    return (Math.sqrt(sq)+1)**2;
  }
  return -1;
}
console.log(findNextSquare(121));
/*function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}*/