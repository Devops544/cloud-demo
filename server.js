// server.js
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

// 🩺 Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// 🌤️ Main Route
app.get('/', (req, res) => {
  res.send(`🌤️ Cloud Demo App running! DB_USER=${DB_USER} DB_PASS=${DB_PASS}`);
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

