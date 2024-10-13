import path from 'path';

import * as query from '../Models/UserModel.js';
import { stat } from 'fs';

// Validate email, nome, and senha using regex
var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w]).{8,}$/;

//Criando função para retornar todos os usuários e enviando para a rota
export function getAllUsers(req, res) {
  query.getAllUsers((err, users) => {
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
  // go to the database and retrieve the user by email
  // if the user exists, return an error message
  // if the user does not exist, create the user and return a success message
  // implement the regex for the data validation
  console.log(req.body);

  const { name, email, password } = req.body;

  // Validate the data
  if (!nameRegex.test(name)) {
    console.log('Invalid name format');
    return res.status(400).json({ message: 'Invalid name format \nThe name must contain only letters and spaces'});
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  } else if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Invalid password format\nThe password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character' });
  }

  // Check if the user already exists
  query.getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error when searching for user by email' });
    }
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Implement the password hashing

    query.createUser({ name, email, password }, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error when trying to register user' });
      }
      return res.status(200).json({ message: 'User created successfully' });
    });

  });
}


export function logUserGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/login.html'));
}

export function logUserPOST(req, res) {
  res.status(200).json({
    message: 'Logged in successfully'
  });
}

// Get all posts of a user
// To check further
export function getAllPostsByUserId(req, res) {
  console.log(`in function "getAllPostsOfTheUser": ${req.body.id}`);
  query.getAllPostsByUserId(req.body.id, (err, posts) => {
    console.log(posts)
    if (err) {
      res.status(500).send('Error fetching posts');
    } else {
      res.status(200).send(posts);
    }
  });
}
