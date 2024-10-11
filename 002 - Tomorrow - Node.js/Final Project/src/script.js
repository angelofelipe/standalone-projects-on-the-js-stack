import express, { json, urlencoded } from 'express';
// import mysql from 'mysql2';
import userRoutes from './Routes/UserRoutes.js';
import PublicRoutes from './Routes/PublicRoutes.js';
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//módulo de rotas
app.use('/', PublicRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
