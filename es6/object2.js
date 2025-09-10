const transformed = (users)=>{
    let result = {};
    for(const {id,name} of users){
        result[id]=name
    }
    return result;
}
console.log(transformed( [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]));