function total(arr){
    let result = arr.filter((e,i)=>{
        let counter =0;
        for(let j=1;j<=i/2;j++){
            if(i%j===0) counter++;
        }
        if(counter===1) return true;
    })
    return result.reduce((sum,element)=> sum+element,0)
}
console.log(total([1,2,7,4,5,6,7,8,9]))
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function total(arr) {
    let result = arr.filter((e, i) => isPrime(i));
    return result.reduce((sum, element) => sum + element, 0);
}
console.log(total([1,2,7,4,5,6,7,8,9]));