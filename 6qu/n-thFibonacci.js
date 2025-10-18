const nthFibo = (n) => {
  const result = [0, 1];
  //initial number of the fibbonacci sequence
  for (let i = 2; i < n; i++) {
    //pushing sum of to previous number
    result.push(result[i - 1] + result[i - 2]);

  }
  return result[n-1];//returning the number at n length couse array start at index 0
};
console.log(nthFibo(5))