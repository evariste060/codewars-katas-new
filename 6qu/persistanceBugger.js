// function persistance(n){
//     let numbers =n.toString().split('').reduce((total,e)=>total*e,1);
//     //console.log(numbers)
//     return (numbers.toString().length===1)?numbers:persistance(numbers)
// }
// console.log(persistance(9897896989))
function persistence(num) {
    let count=0;
    while(num>10){
        num = [...num.toString()].reduce((total,element)=>total*element,1);
        count++;

    }
  return count;
}
console.log(persistence(234))