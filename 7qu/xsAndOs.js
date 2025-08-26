function XO(str) {
    //code here
    let x = [];
    let o = [];
    for(let char of str){
        if (char.toLowerCase()=== 'x') x.push(char);
        else if (char.toLowerCase()==='o') o.push(char);
    }
    return x.length === o.length;
}
console.log(XO('uyuty'));  