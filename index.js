const express = require('express'); //Line 1
const app = express(); //Line 2
const PORT = 5000


// create a GET route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

// This displays message that the server running and listening to specified port
app.listen(PORT,
     () => console.log(`Listening on port ${PORT}`)); //Line 6
