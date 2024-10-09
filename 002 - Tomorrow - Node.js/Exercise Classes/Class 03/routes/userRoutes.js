import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
 res.send('Listando todos os Usuarios');
});

export default router;
