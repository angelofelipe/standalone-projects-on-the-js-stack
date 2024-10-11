import path from 'path';

import { getAll } from '../Models/UserModel.js';

//Criando função para retornar todos os usuários e enviando para a rota
export function getAllUsers(req, res) {
  getAll((err, users) => {
    console.log(users)
    if (err) {
      res.status(500).send('Erro ao buscar usuários');
    } else {
      res.status(200).send(users);
    }
  });
}

// Register User
export function registerUserGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/register.html'));
}


export function registerUserPOST(req, res) {
  res.status(200).json({
    message: 'User registered'
  });
  // res.send();
}


export function logUserGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/login.html'));
}

export function logUserPOST(req, res) {
  res.status(200).json({
    message: 'Logged in successfully'
  });
}
