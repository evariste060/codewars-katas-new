/*this kata return the array of minimum value in array arr
 abtained by combining n element */
 const minValue = (arr,n)=> {
  return arr.map((_,i)=>{
      const short = arr.slice(i,i+n)
      return (short.length === n)? Math.min(...short): null;
  }).filter(e=>e!==null)
  }
  console.log(minValue([1,2,10,5,22,7,8],2))//[ 1, 2, 5, 5, 7, 7 ]