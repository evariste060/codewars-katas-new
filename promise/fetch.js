// console.log('Hello World')
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(result=>result.json())
// .then(data=>{
//     for(obj of data){
//         const info = Object.entries(obj);
//         console.log(info)
//     }
// }).catch((err=>console.log(err)))
async function getData(url){
    let response = await fetch(url);
    let data = await response.json()
    return data
}
getData("https://jsonplaceholder.typicode.com/users")
.then(result=>{
    console.log(result)
    // for(let key of result){
    //     const personalInfo = Object.values(key);
    //     console.log(personalInfo)
    // }

})
.catch(err=>console.log(err))
