import { Router } from 'express';
import { getAllUsers, logUserGETP, logUserPOST, registerUserPOST, registerUserGETP } from '../Controllers/UserController.js';

const router = Router();

// Routes -> "/user"
router.get('/users', getAllUsers);

router.get('/register', registerUserGETP);
router.post('/register', registerUserPOST);

router.get('/login', logUserGETP);
router.post('/login', logUserPOST);


export default router;
