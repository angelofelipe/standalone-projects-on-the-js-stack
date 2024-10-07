// const express = require('express');
import express from 'express';
const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

const globalMiddleware = (req, res, next) => {
  console.log('Global middleware executed');
  next();
};

// in this function is not used none middleware, given that the middleware is invoked to be use by the app later.
app.get('/', (req, res) => {
  res.send('Route 1');
});

// here the middleware is attached to all subsequent routes of the express
app.use(globalMiddleware);

// in this function the middleware function is used, given that the middleware already gone defined
app.get('/route2', (req, res) => {
  res.send('Route 2');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
  