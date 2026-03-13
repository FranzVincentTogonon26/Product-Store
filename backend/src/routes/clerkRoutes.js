import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import * as userClerkController from '../controllers/userClerkController.js';

const router = express.Router();

router.post('/', requireAuth, userClerkController.createUser);

export default router;
