const express = require('express');
const compression = require('compression');

const PORT = 80

const buildPath = 'dist/dud-ui'

// Initialize
const app = express();

// Serve static resources from 'build' folder
app.use(express.static(buildPath));

// Enable gzip response compression
app.use(compression());

// Otherwise serve index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/' + buildPath + '/index.html');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
