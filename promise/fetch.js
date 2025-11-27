// console.log('Hello World')
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(result=>result.json())
// .then(data=>{
//     for(obj of data){
//         const info = Object.entries(obj);
//         console.log(info)
//     }
// }).catch((err=>console.log(err)))
//getting some data
const list = document.getElementById('userList');
async function getData(url){
    let response = await fetch(url);
    let data = await response.json()
    return data
}
//function display users
function displayUser(users){
    const list = document.getElementById('userList');
    for(let user of users){
        const li = document.createElement("li");
        li.innerHTML= `<strong>Name: ${user.name}</strong><br><strong>Email </strong>${user.email} <br> <strong>Address </strong>${user.address.city}`;
        list.appendChild(li)
    }
}
getData("https://jsonplaceholder.typicode.com/users")
.then(result=>displayUser(result))
// .catch(err=>console.log(err))
const data = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify({title: "Hello",body:"this is for testing"})
}
async function postData(url,data){
    let response = await fetch(url,data);
    return response;
}
postData("https://jsonplaceholder.typicode.com/users",data)
.then(result=>console.log(result))


