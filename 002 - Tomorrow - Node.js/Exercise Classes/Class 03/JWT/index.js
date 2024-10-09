const mysql = require('mysql2');//importação do módulo mysql2
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

function authentication(req, res, next) {
    const auth = req.headers.authorization;
  
    if (!auth) {
      return res.status(401).send({ message: "Token Null" });
    }
  
    const token = auth.split(" ")[1];
  
    if (!token) {
      return res.status(401).send({ message: "Token Null" });
    }
  
    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
      if (err) {
        return res.status(401).send(err);
      }
      next();
    });
}  

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


app.get('/usuarios', authentication, (req, res) => {
    res.sendFile(__dirname + '/logged.html');
});

//Rota para resgatar dados do POST do formulário
app.post('/usuarios', authentication, (req, res) => {
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

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post("/login", (req, res) => {
    const user = req.body;
  
    // const token = "dlbvhkenslcjkdklfome328973289109";
    const token = jwt.sign({nome: user.nome}, process.env.TOKEN_KEY);
  
    console.log(user);
  
    const query = `SELECT * FROM usuarios WHERE nome='${user.nome}'`;
  
    connection.query(query, (err, result) => {
        if (err) return res.status(500).send({ message: "Something went wrong", err });
  
        if (result.length === 0) return res.status(404).send({ message: "User not found" });
    
        if (result[0].senha !== user.senha) return res.status(401).send({ message: "Wrong password." });
    
        res.sendFile(__dirname + '/logged.html');
        return res.status(200).send({ message: "User successfully Logged in", token: token });
    });
});
  

const port = 3000;
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});
