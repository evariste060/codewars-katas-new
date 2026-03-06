class GroupByDifference {
    constructor(numbers) {
      this.numbers = numbers
    }
    find(difference) {
        let i = 0
        let j = 1
        const indeces = new Set()
       let n = this.numbers.length;
        this.numbers.sort((a,b)=>a-b);
        while (j<n){
            let diff = this.numbers[j]-this.numbers[i]
            if(diff <=difference){
               indeces.add(i)
               indeces.add(j)
                i+=1
                j+=1
            }
            else{
                i+=1
                j+=1
            }
        }
        return [...indeces].map(i=>this.numbers[i])
    }
}
arrays = new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8])
console.log(arrays.find(2)) //[ 5, 5, 30, 31, 32 ]
