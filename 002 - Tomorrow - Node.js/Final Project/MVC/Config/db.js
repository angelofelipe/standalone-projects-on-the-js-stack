//Configuração que já vimos para banco de dados
import { createConnection } from 'mysql2';
const connection = createConnection({
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

export default connection;
