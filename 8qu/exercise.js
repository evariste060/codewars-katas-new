let obj1 = {a:1,b:2}
let obj2 = {a:1,b:3}
//console.log(obj1===obj1)
function compare (obj1,obj2){
    for(let key in obj1){
        if(!(obj1[key]===obj2[key])){
            console.log(obj1[key])
            return false;
            
        }
    }
    return true
}
console.log(JSON.stringify(obj1))