function getMostFrequentInEach(data) {
  return data.temperature.map(arr => {
    const frequency = {};
    for (const num of arr) {
        //count the number of occurrences of each number in array
      frequency[num] = (frequency[num] || 0) + 1;
    }
    let mostFrequent = null;
    let maxCount = 0;
    //count the number that has high frequency in the array of frequency
    for (const [num, count] of Object.entries(frequency)) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = Number(num);
      }
    }

    return mostFrequent;
  });
}
const data = {
  "temperature": [
    [15,17,19,21,21,21,20,16],
    [16,17,22,22,22,22,20,16],
    [12,17,19,20,20,20,20,18],
    [14,15,19,19,20,22,18,17],
    [15,17,24,24,24,20,20,20]
  ]
};

console.log(getMostFrequentInEach(data)); //output [ 21, 22, 20, 19, 20 ]
