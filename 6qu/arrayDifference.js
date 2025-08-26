function arrayDiff(a, b) {
    //let removedDuplicate = new Set(a);
    //newArry =  [...removedDuplicate];
    return a.filter(n => !b.includes(n))
}
console.log(arrayDiff([1,2,2],[1]))