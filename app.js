const http = require('http');

const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from new repo');
});

server.listen(port, hostname, () => {
  console.log(`This is migration Server running at http://${hostname}:${port}/`);
});