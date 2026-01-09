function findMissing(arr) {  
   const n = arr.length;
  const d = (arr[n - 1] - arr[0]) / n;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] !== d) {
      return arr[i] + d;
    }
  }
  return null;
}
console.log(findMissing([1, 2, 4, 5]))