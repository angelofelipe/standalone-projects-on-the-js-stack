import { getAll } from '../Models/UserModel';
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
export function registerUserDisplay(req, res) {
  
}


export function registerUser(req, res) {

}
