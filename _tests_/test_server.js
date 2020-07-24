const http = require('http'),
fs = require('fs'),
readStream = fs.createReadStream('./_tests_/test.txt', { encoding: 'utf-8' });


const server = http.createServer((req, res) => {
  if (req.url == '/') {
    readStream.on('data', (chunk) => {
      res.write(chunk);
      res.end();
    });
  } else {
    res.write('Page not found.');
  }
});

server.listen(5000);