import { Router } from 'express';
import { getAllUsers } from '../Controllers/UserController.js';

const router = Router();

// Routes
router.get('/users', getAllUsers);

// Register User
router.get('/register', registerUserDisplay);
router.post('/register', registerUser)

router.get('/home')


export default router;
