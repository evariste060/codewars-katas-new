/*this function return the number if each digit not zero added zeros at end equal to remaining zero*/

const expandedForm = (num)=> {
  let digits = num.toString().split('');
  let length = digits.length;
  return digits.map((e,i)=>{
    if(e!=='0') return e.padEnd(length - i, '0');
  }).filter(Boolean)
    .join(' + ')
}
console.log(expandedForm(13440))