// function towerBuilder(nFloors) {
//   let tower=[];
//   let floor = '';
//   for(let i=1;i<=nFloors;i++){
//     for(let j=1;j<=i;j++){
//       floor+='*'
//     }
//     tower.push(floor)
//   }
//   return tower;
// }
// console.log(towerBuilder(3));
function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    const stars = '*'.repeat(2 *i - 1);
    const spaces = ' '.repeat(nFloors - i);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
console.log(towerBuilder(3));
