function sumAll(n,m){
    let sum=0;
    if (n<0 || m<0){
        return "invalid"
    }
    else {
        for (let i=n;i<m;i+=n){//multiples of a number is correct division
            if (i%n===0){
                sum +=i;
            }
        }
    }
    return sum;
}
console.log(sumAll(2,9))