//Configuração que já vimos para banco de dados
import { createConnection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = createConnection({
  host: process.env.HOST,
  user: process.env.USER_CONFIGURED,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com database: ', err);
    return;
  }
  console.log('Conectado com sucesso!');

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

export default connection;
