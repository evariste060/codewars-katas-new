function stray(numbers){
    return numbers.filter((e)=> numbers.indexOf(e)===numbers.lastIndexOf(e))[0];
}
console.log(stray([2,2,2,1,2,1,2,1,3,2])); 