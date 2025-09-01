function sortInnerContent(string){
   return string.split(' ').map(e=>{
        return `${e[0]}${[...e.slice(1,e.length-1)].sort().reverse().join('')}${e[e.length-1]}`
    }).join(' ')
    
}
console.log(sortInnerContent("sort the inner content in descending order"  ))