function multiplicationTable(size) {
  const multiples = [];
  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i*j);
    }
    multiples.push(row);
  }
  return multiples
}
console.log(multiplicationTable(3))