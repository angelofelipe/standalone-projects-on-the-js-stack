import { Router } from 'express';
import cookieParser from 'cookie-parser';

import { authenticate } from '../Controllers/Middleware.js';
import {    getAllUsers, logUserGETP, logUserPOST, registerUserPOST, registerUserGETP,
            feedGETP } from '../Controllers/UserController.js';

const router = Router();
router.use(cookieParser());

// Routes -> "/user"
router.get('/users', getAllUsers);

router.get('/register', registerUserGETP);
router.post('/register', registerUserPOST);

router.get('/login', logUserGETP);
router.post('/login', logUserPOST);

// Authenticated routes
router.use(authenticate);

router.get('/feed', feedGETP);

export default router;
