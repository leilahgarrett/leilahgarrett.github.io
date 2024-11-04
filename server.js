// Import necessary modules 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files

// Route to handle form submission
app.post('/submit', (req, res) => {
    // Destructure the name and email from the request body
    const { name, email } = req.body;
    
    // You can add your server-side logic here (e.g., save to a database)

    // Send a response back to the client
    res.send(`Thank you for contacting us, ${name}!`);
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    // Log the URL where the server is running
    console.log(`Server is running on http://localhost:${PORT}`);
});
