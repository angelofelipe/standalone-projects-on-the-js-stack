import { Router } from 'express';
import cookieParser from 'cookie-parser';

import { authenticate } from '../Controllers/Middleware.js';
import {    getAllUsers, logUserGETP, logUserPOST, registerUserPOST, registerUserGETP,
            feedGETP, addPostGETP, addPostPOST, feedGETContent, getAllPostsByUserId,
            updatePostPUT, getPageMyPosts, getPostById, deletePostDELETE } from '../Controllers/UserController.js';

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
router.get('/feed/content', feedGETContent);

router.get('/post/add', addPostGETP);
router.post('/post/add', addPostPOST);

router.get('/post/own', getPageMyPosts);
router.get('/post/own/content', getAllPostsByUserId);

router.get('/post/own/:id', getPostById);
router.put('/post/own/:id', updatePostPUT);
router.delete('/post/own/:id', deletePostDELETE);

export default router;
