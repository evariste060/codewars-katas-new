function oddOrEven(array) {
  let result = array.reduce(function(sum,n){
    return sum + n;
  },0)
  return (result%2===0)?"even":"odd";
   //enter code here
}