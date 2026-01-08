function validate(n){
    let multiples =[ ...n.toString()]
    let result = []
    if(n.toString().length%2){
      result = multiples.map((e,i)=>(i%2)?e*2:e)
      .map(e=>e>9?Number(e)-9:Number(e))
    }
    else{
      result = multiples.map((e,i)=>!(i%2)?e*2:e)
      .map(e=>e>9?Number(e)-9:Number(e))
    }
    return result.reduce((sum,curr)=>sum+curr,0)%10 ===0;
}
console.log(validate(123))