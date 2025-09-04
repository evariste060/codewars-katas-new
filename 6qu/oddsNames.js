function findOddNames(list) {
  const oddSum = list.map(e=>[...e.firstName].reduce((sum,el)=>sum+(el.charCodeAt(0)),0));
  return list.filter((_,i)=>oddSum[i]%2)
}
console.log(findOddNames([ { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]))
//return the objects of which have the odd sum first names charCode