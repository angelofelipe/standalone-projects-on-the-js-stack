//Configuração que já vimos para banco de dados
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aluno',
  password: 'aluno',
  database: 'node'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com database: ', err);
    return;
  }
  console.log('Conectado com sucesso!');
});
module.exports = connection;
