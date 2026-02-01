async function fetchUserTodos(){
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
  ]
  let [userResponse,todoResponse] = await  Promise.all(urls.map(url=>fetch(url)));
  let [users,todos] = await Promise.all([userResponse.json(),todoResponse.json()]);
  let userWithTodos = []
  for(let user of users){
    userWithTodos.push({
      ...user,
      todos: todos.filter(u=>u.userId===user.id)
    })
  }
  return userWithTodos  
}
fetchUserTodos().then(result =>console.log(result))

  
