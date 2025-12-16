const sort = (str) => {
    const words = [...str].filter(e=>! (e===" "))
   const  letters = words.filter(e=>(e.toLowerCase())!== e.toUpperCase())
   .sort((a,b)=>a.localeCompare(b.toLowerCase())).join('');
   const nonLetters = words.filter(e=> (e.toLowerCase()===e.toUpperCase()))
   .sort().join('');
    return [...letters,...nonLetters].join('');
}
console.log(sort("The ca10:t sat on the mat1223434!"))