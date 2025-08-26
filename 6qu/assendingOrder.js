function oder(number){
    return number
    .toString().split('').sort().reverse().join('');
}
console.log(oder(234355))