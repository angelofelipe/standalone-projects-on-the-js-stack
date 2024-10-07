const express = require('express');
const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

const verifyUser = (req, res, next) => {
    console.log
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/data', (req, res) => {
  const data = req.body;
  console.log(req.body);
  res.send(`Dados recebidos: ${JSON.stringify(data)}`);
});

app.post('/user', )

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
