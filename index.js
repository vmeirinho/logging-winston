const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Example route that triggers logging
app.get('/api/example', (req, res) => {
  logger.info('An example log message.');

  res.json({ message: 'Success' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
