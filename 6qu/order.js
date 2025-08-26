function order(words){
   // let words = 'is2 thi1s T4st 3a'
    let arr = words.split(' ');
    return arr.sort((a,b)=>{
        let na = [...a].find(c=>!isNaN(c))
        let nb = [...b].find(i=>!isNaN(i));
        return na-nb;
       }).join(' ')
    
}
console.log(order('is2 thi1s T4st 3a')) 