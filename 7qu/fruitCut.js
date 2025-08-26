function cutFruits(fruits) {
  return fruits.flatMap(e => [
    e.slice(0, Math.ceil(e.length / 2)),
    e.slice(Math.ceil((e.length / 2)))
  ]);
}
console.log(cutFruits(['banana','apple','orange']));
