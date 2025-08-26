function arrayDiff(a,b){
    return a.filter(e=>!(b.includes(e)))
}
console.log(arrayDiff([1,2,2,3,4],[2,3,1]))