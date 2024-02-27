const http = require('http');

const countStudents = require('./3-read_file_async');
const { isUtf8 } = require('buffer');

const hostname = 'localhost';

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const url = req.url;
  
  if (url === '/students') {
    res.write(`This is the list of our students\n ${countStudents(process.argv[2])}`);
    res.end();
    } 
  else {
    res.end('Hello Holberton School!');
  }
});
app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
