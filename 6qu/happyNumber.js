/*happy number are number such sum of it's digits squared it will end up by giving one*/
const isHappy = (n)=>{
    let seen  = [];//to store the sum of square already seen
    while(n!==1){
        //if we return to number already seen we break to avoid infinity loop
        if(seen.includes(n)){
            return false
        }
        seen.push(n)
        n = n
            .toString()
            .split('')
            .reduce((sum,num)=>sum+num**2,0)
    }
    //if loop terminate we will have the happy number
    return true
    
}