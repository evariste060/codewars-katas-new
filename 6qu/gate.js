/*function capitalized(str){
    let vowels = 'eioua';
    let result = str.split('');
    let answers =  result.map((e,i)=>{
        if(vowels.includes(e)&& i%2!==0){
             return e.toUpperCase()
        }
        return e;
    })
    return answers.join('');
}
console.log(capitalized('javascript is an awesome language'));*/
function capitalized(str) {
    return str.split('').map((c,i) => 'aeiou'.includes(c)&& i%2!==0 ? c.toUpperCase() : c).join('');
}
console.log(capitalized('javascript is an awesome language'));