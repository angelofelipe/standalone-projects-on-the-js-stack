const http = require('http');
const fs = require("fs")
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Olá, mundo!');
});

fs.readFile('tomorrowcccc.json', 'utf8', (err, data) => {
  if (err) throw err; // tratamento de erro
  console.log(JSON.parse(data));
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});