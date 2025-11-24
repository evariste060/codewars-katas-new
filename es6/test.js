const transformed = (data) =>{
    const ids={};
    const names = {}
    for(const {id,name} of data){
        ids['id']=[id]
    }
    return ids
}

console.log(transformed( [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]));