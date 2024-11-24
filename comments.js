// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request for /comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});