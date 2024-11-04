const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // You can add your server-side logic here (e.g., save to a database)
    res.send(`Thank you for contacting us, ${name}!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
