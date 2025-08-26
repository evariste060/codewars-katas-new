function sumOdd(number){
    return number.filter((n)=>{
        if(n%2!==0) return n;
    }).reduce((sum,num)=> sum+num,0)
}
console.log(sumOdd([23,5,5,4,7]))