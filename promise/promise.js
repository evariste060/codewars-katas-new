function userLogin(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve('You login Successfully!'))
    })
}
function fetchData(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve("Data fetched Successfully!"),ms);
    })
}
fetchData(2000)
.then((values)=>{console.log(values); return userLogin()})
.then((values=>console.log(values)))
.catch(error=>console.log(error))
.finally(()=> {new error('Whoops')})
//get the use ID
//find the Information on the user
//post the