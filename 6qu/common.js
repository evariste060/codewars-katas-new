function common(a, b, c) {
  let sum = 0
  const freqB = {}
  const freqC = {}
  for (let num of b) {
    freqB[num] = (freqB[num] || 0) + 1
  }
  for (let num of c) {
    freqC[num] = (freqC[num] || 0) + 1
  }
  for (let num of a) {
    if (freqB[num] > 0 && freqC[num] > 0) {
      sum += num
      freqB[num]--
      freqC[num]--
    }
  }
  return sum
}