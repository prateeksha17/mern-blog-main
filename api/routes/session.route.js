import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createSession, getSessions } from '../controllers/session.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createSession);
router.get('/getSessions', getSessions);


export default router;
