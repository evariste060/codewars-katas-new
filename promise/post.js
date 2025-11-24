const postData = {
  title: 'My New Post',
  body: 'This is the content.',
  userId: 1,
};

fetch('https://api.example.com/posts', {
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json', // Tell the server what type of data is being sent
  },
  body: JSON.stringify(postData), // Convert the JavaScript object to a JSON string
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));