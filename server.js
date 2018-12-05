// HTTP module approach
// const http = require('http');

// const server = http.createServer(function(req, res) {
//   res.end('Hello world');
// });

// server.listen(3000, function() {
//   console.log('Listening to requests on port 3000...');
// });


// EXPRESS approach
const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send('Hello world');
});

app.listen(3000, function(){
  console.log('Listeting on port 3000...');
});
