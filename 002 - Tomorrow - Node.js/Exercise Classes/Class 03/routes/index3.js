const mysql = require('mysql2');//importação do módulo mysql2
const express = require('express');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

const connection = mysql.createConnection({//criação da conexão do mysql
   host: 'localhost',//host utilizado
   user: 'aluno',//usuário do bd
   password: 'aluno',//senha do bd
   database: 'node'//nome do schema
});
connection.connect((err) => {
   if (err) {
       console.error('Erro ao conectar ao MySQL:', err);
       return;
   }
   console.log('Conectado ao MySQL!');

   const criarUsuario = `
     CREATE TABLE IF NOT EXISTS usuarios (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       senha VARCHAR(100) NOT NULL
     );
   `;
   connection.query(criarUsuario, (err, result) => {
       if (err) {
           console.error('Erro ao criar tabela:', err);
           return;
       }
       console.log('Tabela "usuarios" criada com sucesso!');
   });
});

app.get('/usuarios', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

//Rota para resgatar dados do POST do formulário
app.post('/usuarios', (req, res) => {
   const { nome, senha } = req.body; //Resgatando dados do formulário
   if (!nome || !senha) { //Tratamento de erro caso não há dados
       return res.status(400).send('Nome e senha são obrigatórios');
   }
   const query = 'INSERT INTO usuarios (nome, senha) VALUES (?, ?)'; //Query do MySQL
   //Inserindo MANUALMENTE dados na tabela (utilizando query acima)
   connection.query(query, [nome, senha], (err, result) => {
       if (err) { //Tratamento de Erro
           console.error('Erro ao inserir usuário:', err);
           return res.status(500).send('Erro ao inserir usuário');
       }
       res.status(201).send('Usuário inserido com sucesso');
   });
});

const port = 3000;
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});