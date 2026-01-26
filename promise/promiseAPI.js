async function fetchUserTodos(){
  const urls = [' https://jsonplaceholder.typicode.com/users'
    ,'https://jsonplaceholder.typicode.com/todos'
  ]
  let requests = await  Promise.all(urls.map(url=>fetch(url)));
  let responses = await Promise.all(requests.map(response=>response.json()));
  let result = {}
  for(let user of responses[0]){
    result.name = user.name 
    result.id = user.id
    result.todos = responses[1].filter(u=>u.id===result.id)
  }
  return result
  
  
}
console.log(fetchUserTodos())

  
