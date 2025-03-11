// Create web server
// Run: node comments.js
// Access: http://localhost:3000

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.json', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found!');
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found!');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});