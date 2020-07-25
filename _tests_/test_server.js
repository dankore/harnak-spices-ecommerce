const http = require('http'),
  fs = require('fs'),
  filename = __dirname + '/test.txt',
  readStream = fs.createReadStream(filename, { encoding: 'utf-8' });

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    readStream.on('data', (chunk) => {
      res.write(chunk);
      res.end();
    });
  } else {
    res.write('Page not found.');
    res.end();
  }

  // ON ERROR
  readStream.on('error', (error) => {
    res.end(error);
  });
});

server.listen(5000);
