fetch('https://api.example.com/data')
  .then(response => {
    // 1. Check if the response was successful (HTTP status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // 2. Parse the body as JSON
    return response.json();
  })
  .then(data => {
    // 3. Use the parsed data
    console.log(data);
  })
  .catch(error => {
    // Handle network errors or errors thrown in .then()
    console.error('Fetch error:', error);
  });