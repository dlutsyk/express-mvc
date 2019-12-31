const express = require('express');
const app = require('./app');

// Initialize express and associate it with app instance.
app.server = express();

// Initialize application insance.
app.init();

// Start server to lister
app.server.listen('3000');