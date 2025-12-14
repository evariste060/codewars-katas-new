const  cakes = (recipe, available) =>  {
    const result = Object.entries(recipe).map(e=>available[e[0]]?Math.floor(available[e[0]]/e[1]):0)
    return result.includes(0)?0:Math.min(...result)
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, { sugar: 1200, eggs: 5, milk: 200}))