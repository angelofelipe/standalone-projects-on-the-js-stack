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
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected successfully!');

  const createUser = `
    CREATE TABLE IF NOT EXISTS user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL
    );
    `;

   connection.query(createUser, (err, result) => {
       if (err) {
           console.error('Error creating table:', err);
           return;
       }
       console.log('Table "user" created successfully!');
   });

   const createPost = `
    CREATE TABLE IF NOT EXISTS post (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      content TEXT NOT NULL,
      userId INT NOT NULL,
      FOREIGN KEY (userId) REFERENCES usuarios(id)
    );
    `;

    connection.query(createPost, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Table "post" created successfully!');
    })

});

export default connection;
