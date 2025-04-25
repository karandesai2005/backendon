// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Lightweight ping endpoint to keep the app alive
app.get('/ping', (req, res) => {
  res.json({ status: 'alive' });
});

// Basic root endpoint
app.get('/', (req, res) => {
  res.send('BackendOn is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});