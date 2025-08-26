/*function sumUnique(numbers){
    let obj = {};
    for(let num of numbers){
        obj[num] =(obj[num]||0)+1;
    }
    let sum =0;
    for(let key in obj){
        if(obj[key]===1) sum+=Number(key);
    }
    return sum
}
console.log(sumUnique([1,3,4,6,32,3,2,2]))*/
function sumUnique(numbers){
    return  numbers
    .filter((n)=> numbers.indexOf(n)===numbers.lastIndexOf(n))
    .reduce((sum,num)=> sum+num,0);
}
console.log(sumUnique([1,3,4,6,32,3,2,2]))