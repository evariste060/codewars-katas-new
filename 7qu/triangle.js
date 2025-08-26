function oddNumbers(n){
    let result = [];
    let num=1;
    for(let i=1;i<=n;i++){
        let row = [];
        for (let j=1;j<=i;j++){
            row.push(num);
            num+=2;
        }
        result.push(row)
    }
    let sum = [...result[n-1]]
   return sum.reduce((total,c)=> total+c,0);
}

console.log(oddNumbers(3));
