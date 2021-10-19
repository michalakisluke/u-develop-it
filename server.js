const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not found)
// Must be immeditaley before app.listen
app.use((req, res) => {
    res.status(404).end();
});

// Must be last function
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});