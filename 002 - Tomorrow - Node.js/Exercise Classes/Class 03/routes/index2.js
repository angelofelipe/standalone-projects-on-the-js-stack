import express, { json } from 'express';
import mysql from 'mysql2'; //importação do módulo mysql2

import userRoutes from './userRoutes.js';

const app = express();

const connection = mysql.createConnection({//criação da conexão do mysql
  host: 'localhost',//host utilizado
  user: 'aluno',//usuário do bd
  password: 'aluno',//senha do bd
  database: 'node'//nome do schema
});

app.use(json());

app.use('/usuarios', userRoutes);


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
      connection.end();
    });
  });
  
  



const port = 3000;
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});
