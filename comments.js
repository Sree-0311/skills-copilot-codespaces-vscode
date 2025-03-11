// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());

// get comments
app.get('/comments', function(req, res) {
  var comments = fs.readFileSync('comments.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(comments);
});

// post comment
app.post('/comments', function(req, res) {
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// create server
var server = app.listen(3000, function() {
  console.log('Server running at http://localhost:' + server.address().port);
});