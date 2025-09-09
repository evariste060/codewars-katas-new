const data = [
    { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 15 },
  { category: 'C', value: 5 },
  { category: 'B', value: 25 }
    ];
const sumByCategory = (arr) => {
  const result = {};

  for (const { category, value } of arr) {
    result[category] = (result[category] || 0) + value;
  }

  return result;
};
console.log(sumByCategory(data))